import { useEffect, useState, useMemo, useRef } from "react";
import { io } from "socket.io-client";
import Customer from "../../src/component/Customer";
import { httpRequest } from "../../src/commons/httpRequest";
import useGuard from "../../src/hooks/useGuard";
import { useRouter } from "next/router";
import Chatter from "../../src/component/Chatter.js";

//socket에서 사용자를 불러올때
const fetchRoomUsers = async (roomNo) => {
  const response = await httpRequest("GET", `/rooms/chat/${roomNo}/userList`);

  return response;
};

let socket;

export default function chatRoom(props) {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState([]); //해당 채팅방 제목
  const { user } = useGuard(); //현재 유저, 사용자 토큰이 있는지 확인후 user 정보를 보내줌
  const [userList, setUserList] = useState([]); //접속한 유저 리스트
  const [messages, setMessages] = useState([]); //처음 렌더링시 이전 메세지들을 모두 담음
  const [isTyping, setIsTyping] = useState(false); //지금 로그인한 사용자가 입력중인지 확인
  const [userType, setUserType] = useState(""); //유저의 현재 상태를 알려줌

  const router = useRouter();

  //console.log("user", user);

  //socket
  useEffect(() => {
    socket = io("http://localhost:8000", {
      transports: ["websocket"],
    });

    if (user) {
      //채팅방 입장시 실행되는 이벤트
      console.log("connect--");

      socket.emit("/rooms/join", {
        roomNo: props.roomNo,
        memberNo: user?.member_no,
        nick: user?.nick,
        type: "SYSTEM_USER_IN",
      });

      //채팅방 유저리스트를 서버에서 받아옴
      socket.on("/rooms/join", (data) => {
        console.log("joinuser", data);

        //접속한 유저 불러오기
        fetchRoomUsers(props.roomNo).then((response) => {
          let res = response.data;

          setUserList([...new Set(res.map((res) => res.nick))]);
        });
      });

      socket.on("/rooms/message", (data) => {
        console.log(
          "서버에서 채팅내용 받기",
          data.data,
          data.data.memberNo,
          user?.member_no
        );

        //isMyMessage: 메세지를 입력한 member_no와 받아온 데이터의 memberNo가 같고,
        //data type이 USER_TEXT 이면 true를 반환, 현재 유저라는 의미
        const messageData = {
          ...data.data,
          isMyMessage:
            data.data.memberNo === user?.member_no &&
            data.data?.type === "USER_TEXT",
        };

        setMessages((messages) => [...messages, messageData]);
      });

      socket.emit("/rooms/typing", {
        roomNo: props.roomNo,
        ...user,
        isTyping,
        type: "SYSTEM_USER_TYPING",
      });

      //상대방이 타이핑 칠때
      socket.on("/rooms/typing", (data) => {
        console.log("on typing", data);
        setUserList((typingUsers) =>
          typingUsers.map((user) => {
            console.log("typing in user", user);
            if (user.member_no === data.member_no) {
              return { ...user, isTyping: true };
            }
            return user;
          })
        );
      });

      socket.on("connect_error", (err) => {
        console.log("err", err);
      });

      //채팅방 나가기
      socket.on("/rooms/out", async (data) => {
        console.log("outUser", data);

        fetchRoomUsers(props.roomNo).then((response) => {
          const res = response.data;
          setUserList([...new Set(res.map((res) => res.nick))]);
        });
      });

      socket.on("disconnect", () => {
        console.log("연결끊김");
      });

      return () => {
        //console.log("user?.member_no", user?.member_no);
        socket.emit("/rooms/out", {
          roomNo: props.roomNo,
          memberNo: user?.member_no,
          nick: user?.nick,
          type: "SYSTEM_USER_OUT",
        });
        socket.disconnect();
      };
    }
  }, [user]);

  // useEffect(() => {
  //   console.log("userList in useEffect", userList);
  // }, [userList]);

  //해당 채팅방 이름 가져오기
  useEffect(() => {
    new Promise(async (res, rej) => {
      const url = `/rooms/${props.roomNo}`;
      const result = await httpRequest("GET", url);

      if (result.success) {
        setRoom(result.data[0].room_title);
      }
    });
  }, []);

  //해당 방의 모든 메세지 불러오기
  useEffect(() => {
    new Promise(async (res, rej) => {
      const url = `/rooms/chat/${props.roomNo}/message`;
      const result = await httpRequest("GET", url);

      if (result.success) {
        setMessages(result.data);
      }
    });
  }, []);

  //채팅 입력하면 message state에 저장
  const handleMessage = (e) => {
    e.preventDefault();
    setIsTyping(true);
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (message.length === 0) return setIsTyping(false);
  }, [isTyping, message]);

  //send가 실행되고 채팅 내용이 db로 추가됨
  const handleSend = () => {
    if (message) {
      if (message.length === 0) {
        alert("채팅 내용을 입력해주세요.");
        return;
      }

      //메세지 서버로 보냄
      socket.emit("/rooms/message", {
        chat: message,
        roomNo: props.roomNo,
        memberNo: user?.member_no,
        nick: user?.nick,
        type: "USER_TEXT",
      });

      setIsTyping(false);
      setMessage("");
    }
  };

  //엔터를 누르면 send 함수를 호출
  const handleEnterOnMessage = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  //out 버튼 누르면 실행되는 함수
  const handleClickBack = () => {
    router.replace("/room");
  };

  const typingUsers = useMemo(() => {
    if (isTyping && JSON.stringify(userList === user.nick)) return userList;
  }, [isTyping]);

  //console.log("typingUser2", typingUsers);
  // console.log("typingUser3", user.nick);
  // console.log("typingUser4", userList);

  return (
    <>
      <div className="chatForm">
        <div className="joinWrap">
          <button onClick={handleClickBack}>Out</button>
          <h4 className="roomTitle">{room}</h4>
          <h4>{`Joined ${userList.length} Members`}</h4>
          {userList.map((user) => (
            <div className="joinUser" key={user.member_no}>
              <p>* {userList}</p>
            </div>
          ))}
        </div>

        <div className="chatWindow">
          {room === "Customer Service" && (
            <Customer messages={messages} userList={userList} />
          )}
          {room === "Chatter" && <Chatter messages={messages} />}
        </div>
        {isTyping && (
          <div className="typingUsers">{`${typingUsers}님이 채팅을 치는 중입니다....`}</div>
        )}
        <div className="chatInputWrap">
          <input
            className="chatInput"
            placeholder="Write a message.."
            onChange={handleMessage}
            onKeyUp={handleEnterOnMessage}
            value={message}
          />
          <button className="sendButton" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      roomNo: ctx.query.id,
    },
  };
};
