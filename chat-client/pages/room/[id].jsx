import { useEffect, useState, useMemo, useRef } from "react";
import { io } from "socket.io-client";
import Customer from "../../src/component/Customer";
import { httpRequest } from "../../src/commons/httpRequest";
import useGuard from "../../src/hooks/useGuard";
import { useRouter } from "next/router";
import Chatter from "../../src/component/Chatter.js";

export default function chatRoom(props) {
  const [message, setMessage] = useState("");

  const [room, setRoom] = useState([]);
  const { user } = useGuard();
  const [nowMessages, setNowMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [comeMessage, setComeMessage] = useState("");
  const router = useRouter();
  const socket = useMemo(() => io("http://localhost:8000"), []);
  const [getMessages, setGetMessages] = useState([]);

  console.log("user", user);
  useEffect(() => {
    if (user) {
      //채팅방 입장시 실행되는 이벤트
      socket.emit(
        "/rooms/join",
        JSON.stringify({
          roomNo: props.roomNo,
          memberNo: user?.member_no,
        })
      );

      socket.on("/rooms/join", (data) => {
        console.log("joinuser", data);
        if (data) {
          const result = httpRequest(
            "GET",
            `/rooms/chat/${props.roomNo}/users`
          );
          if (result.success) {
            setUsers(result.data);
            return setComeMessage("in");
          }
        }
      });

      //서버에서 채팅 내용 받기
      socket.on("/rooms/message", (data) => {
        const messageData = JSON.parse(data);
        console.log("get message", messageData);

        setNowMessages((messages) => [...messages, messageData.data]);
      });

      socket.on("connect_error", (error) => {
        console.log("err", error);
      });

      //채팅방 나가기
      socket.on("/rooms/out", (data) => {
        console.log("outuser", data);
        if (data) return setComeMessage("out");
      });

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
    }
  }, [user]);

  //해당 채팅방 이름 가져오기
  useEffect(() => {
    new Promise(async (res, rej) => {
      const url = `/rooms`;
      const result = await httpRequest("GET", url);

      if (result.success) {
        setRoom(result.data.room_title);
        //console.log(result.data.room_title);
      }
    });
  }, []);

  useEffect(() => {
    //해당 방의 모든 메세지 불러오기
    new Promise(async (res, rej) => {
      const url = `/rooms/chat/${props.roomNo}/message`;
      const result = await httpRequest("GET", url);

      if (result.success) {
        setGetMessages(result.data);
      }
    });

    //접속한 유저 불러오기
    new Promise(async (res, rej) => {
      const url = `/rooms/chat/${props.roomNo}/users`;
      const result = await httpRequest("GET", url);

      if (result.success) {
        return setUsers(result.data);
      }
    });
  }, []);

  const handleMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  //send가 실행되고 채팅 내용이 db로 추가됨
  const handleSend = () => {
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
  };

  const handleEnterOnMessage = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleClickBack = () => {
    socket.emit(
      "/rooms/out",
      JSON.stringify({
        roomNo: props.roomNo,
        memberNo: user?.member_no,
      })
    );
    socket.disconnect();

    router.replace("/room");
  };

  return (
    <>
      <div className="chatForm">
        <div className="joinWrap">
          <button onClick={handleClickBack}>Back</button>
          <h4 className="roomTitle">{room}</h4>
          <h4>{`Joined ${users.length} Members`}</h4>
          {users.map((user) => (
            <div className="joinUser" key={user.member_no}>
              <p>* {user.nick}</p>
            </div>
          ))}
        </div>
        <div className="chatWindow">
          <Customer
            getMessages={getMessages}
            nowMessages={nowMessages}
            comeMessage={comeMessage}
          />
          <Chatter
            getMessages={getMessages}
            nowMessages={nowMessages}
            comeMessage={comeMessage}
          />
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
