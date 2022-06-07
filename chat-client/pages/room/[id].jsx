import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { httpRequest } from "../../src/commons/httpRequest";
import useGuard from "../../src/hooks/useGuard";
import { useRouter } from "next/router";
import Rooms from "../../src/component/Rooms";
import { useBeforeunload } from "react-beforeunload";

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
  const [typingUserList, setTypingUserList] = useState([]);

  const router = useRouter();

  useBeforeunload((e) => e.preventDefault()); //새로고침 방지

  //socket
  useEffect(() => {
    socket = io("http://localhost:8000", {
      transports: ["websocket"],
    });

    if (user) {
      //채팅방 입장시 실행되는 이벤트
      console.log("connect--");

      //채팅방 유저리스트를 서버에서 받아옴
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
        fetchRoomUsers(data.roomNo).then((response) => {
          let res = response.data;

          setUserList([...new Set(res.map((res) => res.nick))]);
        });
      });

      //인삿말
      socket.on("in user notice", (data) => {
        console.log("입장 인삿말", data);

        const notice = {
          type: data.type,
          content: `${data?.nick}님이 들어오셨습니다.`,
        };

        setMessages((message) => [...message, notice]);
      });

      //서버에서 채팅내용 받기
      socket.on("/rooms/message", (data) => {
        console.log(
          "서버에서 채팅내용 받기",
          data.data,
          data.data.memberNo,
          user?.member_no
        );

        //isMyMessage: 메세지를 입력한 member_no와 받아온 데이터의 memberNo가 같고,
        //data type이 USER_TEXT 이면 true를 반환, 현재 유저라는 의미
        const notice = {
          ...data.data,
          isMyMessage:
            data.data.memberNo === user?.member_no &&
            data.data?.type === "USER_TEXT",
        };
        console.log("notice2", notice);
        setMessages((messages) => [...messages, notice]);
      });

      //상대방이 타이핑 칠때
      socket.on("/rooms/typing", (data) => {
        console.log("on typing", data);

        const notice = {
          type: "SYSTEM_USER_TYPING",
          content: data.nick,
          isTyping: data.isTyping,
        };

        setTypingUserList([notice]);
      });

      socket.on("connect_error", (err) => {
        console.log("err", err);
      });

      //채팅방 나가기
      socket.on("/rooms/out", async (data) => {
        console.log("outUser", data);

        //joined members 반영
        fetchRoomUsers(props.roomNo).then((response) => {
          const res = response.data;
          setUserList([...new Set(res.map((res) => res.nick))]);
        });
      });

      socket.on("out user notice", (data) => {
        console.log("퇴장 인삿말", data);

        const notice = {
          type: data.type,
          content: `${data?.nick}님이 나가셨습니다.`,
        };

        //인삿말 반영
        setMessages((messages) => [...messages, notice]);
      });

      socket.on("disconnect", () => {
        console.log("연결끊김");
      });

      return () => {
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
      const data = result.data;

      if (result.success) {
        data.map((data) => {
          console.log("in map2", data.member_no);
          console.log("in map user");

          if (data.member_no === user?.member_no) {
            data.isMyMessage = true;
            return data;
          } else {
            return data;
          }
        });
        setMessages(data);
        console.log("data", data);
      }
    });
  }, []);
  console.log("user", user?.member_no);
  //채팅 입력하면 message state에 저장
  const handleMessage = (e) => {
    e.preventDefault();
    setIsTyping(true);
    setMessage(e.target.value);

    socket.emit("/rooms/typing", {
      roomNo: props.roomNo,
      ...user,
      isTyping,
      type: "SYSTEM_USER_TYPING",
    });
  };

  //message가 없으면 서버로 isTyping false를 보내줘서 입력중 문구가 사라짐
  useEffect(() => {
    if (message.length === 0) {
      socket.emit("/rooms/typing", {
        roomNo: props.roomNo,
        ...user,
        isTyping: false,
      });
    }
  }, [message]);

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

  return (
    <>
      <div className="chatForm">
        <div className="joinWrap">
          <button onClick={handleClickBack}>Out</button>
          <h4 className="roomTitle">{room}</h4>
          <h4>{`Joined ${userList.length} Members`}</h4>
          {userList.map((user) => (
            <div className="joinUser" key={user.member_no}>
              <p>* {user}</p>
            </div>
          ))}
        </div>

        <div className="chatWindow">
          <Rooms messages={messages} room={room} />
        </div>

        {typingUserList.map((user, i) =>
          user.isTyping && user.type === "SYSTEM_USER_TYPING" && !undefined ? (
            <div className="typingUsers" key={i}>
              {user.content}님이 입력중입니다.
            </div>
          ) : null
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
  const id = ctx.query.id;

  return {
    props: {
      roomNo: id,
    },
  };
};
