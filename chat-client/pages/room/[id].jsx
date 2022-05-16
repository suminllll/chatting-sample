import { useEffect, useState, useMemo } from "react";
import { io } from "socket.io-client";
import Customer from "../../src/component/Customer";
import { httpRequest } from "../../src/commons/httpRequest";
import useGuard from "../../src/hooks/useGuard";
import { useRouter } from "next/router";
import Chatter from "../../src/component/Chatter.js";
import { useBeforeunload } from "react-beforeunload";
import axios from "axios";

const fetchRoomUsers = async (member_no) => {
  console.log(member_no);
  const response = await axios.get(`/rooms/chat/${member_no}/userList`);
  console.log(response);
  return response;
};

export default function chatRoom(props) {
  const [message, setMessage] = useState("");

  const [room, setRoom] = useState([]); //해당 채팅방 제목
  const { user } = useGuard(); //현재 유저, 사용자 토큰이 있는지 확인후 user 정보를 보내줌
  const [nowMessages, setNowMessages] = useState([]); //내가 입력한 채팅
  const [userList, setUserList] = useState([]); //현재 접속한 유저
  const [comeMessage, setComeMessage] = useState([]); //user의 join, out을 알려줌
  const [getMessages, setGetMessages] = useState([]); // 이전 메세지들중 현재 user가 아닌 user의 모든 메세지들을 담음
  const [messages, setMessages] = useState([]); //처음에 이전 메세지들을 모두 담음
  const [typingUser, setTypingUser] = useState([]); //현재 내용을 입력하고 있는 유저가 표시

  const router = useRouter();
  // const socket = useMemo(
  //   () => io("http://localhost:8000"),

  //   []
  // );

  //socket
  useEffect(() => {
    const socket = io("http://localhost:8000", {
      transports: ["websocket"],
    });

    if (user) {
      //채팅방 입장시 실행되는 이벤트
      //socket.connect();

      // socket.on("connect", () => {
      console.log("connect--");

      socket.emit(
        "/rooms/join",
        JSON.stringify({
          roomNo: props.roomNo,
          memberNo: user?.member_no,
        })
      );

      // //채팅방 유저리스트를 서버에서 받아옴
      socket.on("/rooms/join", (member_no) => {
        console.log("joinuser", member_no);
        //if (data.includes(userList.memberNo))
        //접속한 유저 불러오기
        fetchRoomUsers(member_no).then((response) => {
          // let res = [];
          console.log("response", response);
          let res = response.data.data;

          console.log("res", res[0].nick);
          ////const users = res.map((res) => res.nick);

          setUserList([...res, res[0].nick]);
          setComeMessage("in");
          console.log(" if userList 들어옴", userList);
        });

        // `/rooms/chat/${props.roomNo}/userList`
        //console.log("추가된 유저", userList, comeMessage);
      });

      // 서버에서 채팅 내용 받기
      socket.on("/rooms/message", (data) => {
        console.log("채팅받기", data);
        const messageData = JSON.parse(data);
        console.log("get message", messageData);

        setNowMessages((messages) => [...messages, messageData.data]);
        setTyping(messageData.nick);
        console.log(messageData.nick);
      });

      socket.on("connect_error", (err) => {
        console.log("err", err);
      });

      // //채팅방 나가기
      socket.on("/rooms/out", async (userList) => {
        console.log("outUser", userList);

        fetchRoomUsers(userList).then((res) => {
          //setUserList(res.data.nick), setComeMessage("out");
          console.log(" if userList out 들어옴", res.data[0].nick);
        });

        console.log("나간유저", userList, comeMessage);
      });

      socket.on("disconnect", () => {
        console.log("연결끊김");
      });

      // //-----
      // socket.emit("/rooms/a", {});

      // socket.on("/rooms/a", (data) => {
      //   console.log("클라에서 테슽츠", data);
      // });
      // //------

      return () => {
        socket.emit(
          "/rooms/out",
          JSON.stringify({
            roomNo: props.roomNo,
            memberNo: user?.member_no,
          })
        );
        socket.disconnect();
      };
      // });
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

      if (result.success) {
        setMessages(result.data);
      }
    });
  }, []);

  //내가보낸 채팅과 다른 유저가 보냈던 채팅을 구분
  useEffect(() => {
    if (user) {
      messages.map((msg) => {
        if (msg.nick !== user.nick)
          // msg.sort(function (a, b) {
          //   return b - a; //[ 4, 3, 0 ]
          // });
          return setGetMessages((messages) => [...messages, msg]);
        setNowMessages((messages) => [...messages, msg]);
      });
    }
  }, [messages]);

  //채팅 입력하면 message state에 저장

  const handleMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

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
        memberNo: user.member_no,
        nick: user.nick,
      });

      setMessage("");
    }
  };

  //엔터를 누르면 send 함수를 호출
  const handleEnterOnMessage = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  //새로고침 방지
  //useBeforeunload((event) => event.preventDefault());

  //out 버튼 누르면 실행되는 함수
  const handleClickBack = () => {
    // socket.emit(
    //   "/rooms/out",
    //   JSON.stringify({
    //     roomNo: props.roomNo,
    //     memberNo: user?.member_no,
    //   })
    // );
    // socket.disconnect();

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
              <p>* {user.nick}</p>
            </div>
          ))}
        </div>
        {typingUser &&
          typingUser.map((user, index) => {
            return (
              <div key={index}>
                <div>`${user}님이 입력중 입니다.`</div>
              </div>
            );
          })}
        <div className="chatWindow">
          {room === "Customer Service" && (
            <Customer
              getMessages={getMessages}
              nowMessages={nowMessages}
              comeMessage={comeMessage}
              userList={userList}
              user={user}
            />
          )}
          {room === "Chatter" && (
            <Chatter
              getMessages={getMessages}
              nowMessages={nowMessages}
              comeMessage={comeMessage}
              userList={userList}
            />
          )}
        </div>
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
