import { useEffect, useState, useMemo } from "react";
import { io } from "socket.io-client";
import Customer from "../../src/component/Customer";
import { httpRequest } from "../../src/commons/httpRequest";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userInfo } from "../../src/store/accounts";
import useGuard from "../../src/hooks/useGuard";

const chatRoom = (props) => {
  const [message, setMessage] = useState("");
  const [info, setInfo] = useRecoilState(userInfo);
  const [room, setRoom] = useState("");
  const { user } = useGuard();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const socket = useMemo(
    () => io("http://localhost:8000", { transports: ["websocket"] }),
    []
  );

  console.log("user", user);
  useEffect(() => {
    if (user) {
      //채팅방 입장시 실행되는 이벤트
      socket.emit("/rooms/join", {
        roomNo: props.roomNo,
        memberNo: user.member_no,
      });

      //채팅
      socket.on("/rooms/join", (data) => {
        setMessages((prev) => [
          ...prev,
          { chat: data.memberNo + "들어왔습니다" },
        ]);
      });

      socket.on("/rooms/message", (data) => {
        console.log("eee");
      });

      socket.on("/rooms/out", (data) => {
        console.log("dd");
      });
    }
  }, [user]);

  useEffect(() => {
    socket.on("data", (data) => {
      setMessages([...messages, data]);
    });
  }, []);

  useEffect(() => {
    new Promise(async (res, rej) => {
      const url = `/rooms`;
      const result = await httpRequest("GET", url);

      if (result.success) {
        setRoom(result.data[0].room_title);
      }
    });
  }, []);

  useEffect(() => {
    //해당 방의 모든 메세지 불러오기
    new Promise(async (res, rej) => {
      const url = `/rooms/chat/${props.roomNo}/message`;
      const result = await httpRequest("GET", url);

      if (result.success) {
        setMessages(result.data);
      }
    });

    //접속한 유저 불러오기
    new Promise(async (res, rej) => {
      const url = `/rooms/chat/${props.roomNo}/users`;
      const result = await httpRequest("GET", url);

      if (result.success) {
        setUsers(result.data);
      }
    });
  }, []);

  const handleMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  //send가 실행되고 채팅 내용이 db로 추가됨
  const handleSend = () => {
    if (message.length < 1) {
      alert("채팅 내용을 입력해주세요.");
    }
    //스크롤로 밑으로 내리기

    //메세지 서버로 보냄
    socket.emit("rooms", { post: message });

    //db에 채팅내용 저장
    return new Promise(async (res, req) => {
      const url = `/rooms/chat`;
      const data = {
        member_no: user.member_no,
        room_no: props.roomNo,
        chat: message,
      };

      const result = await httpRequest(`POST`, url, data);

      if (result.success) {
        setInfo({
          ...info,
          chat: messages,
        });
        setMessage("");
      }
    });
  };

  const handleEnterOnMessage = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  socket.on("connect_error", (error) => {
    console.log("err", error);
  });

  return (
    <>
      <div className="chatForm">
        <div className="joinWrap">
          <h4 className="roomTitle">{room}</h4>
          <h4>{`Joined ${users.length} Members`}</h4>
          {users.map((user) => (
            <div className="joinUser" key={user.member_no}>
              <p>* {user.nick}</p>
            </div>
          ))}
        </div>
        <div className="chatWindow">
          {/* {type === {type} ? (<`${type}` message={message}/>) } */}
          <Customer messages={messages} users={users} />
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
};

export default chatRoom;

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      roomNo: ctx.query.id,
    },
  };
};
