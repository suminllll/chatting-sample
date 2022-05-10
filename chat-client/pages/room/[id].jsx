import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Customer from "../../src/component/Customer";
import { httpRequest } from "../../src/commons/httpRequest";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userInfo } from "../../src/store/accounts";

const socket = io("http://localhost:8000", { transports: ["websocket"] });

const chatRoom = (props) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState([]);
  const [info, setInfo] = useRecoilState(userInfo);

  //채팅방 앞글자만 잘라서 type에 할당해줌
  //type마다 ui가 다를예정
  useEffect(() => {
    //메세지를 전부 가져오는 api 만들기
    //type 만들기
    const type = info.roomTitle.split(" ")[0];
    setInfo({
      ...info,
      roomType: type,
    });

    socket.emit(
      "/socket/v1/room/join",
      JSON.stringify({ roomId: props.roomId, userId: user.id })
    );
  }, []);
  console.log("room", info);

  useEffect(() => {
    fetchMessages(props.roomNo).then((res) => {
      setMessages(res.data);
    });

    fetchRoomUsers(props.roomNo).then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleMessage = (e) => {
    setName(e.target.value);
  };

  //useEffect안에 넣어놓기
  socket.on("data", (data) => {
    setMessage([...message, data]);
  });

  //send가 실행되고 채팅 내용이 db로 추가됨
  const handleSend = () => {
    e.preventDefault();
    if (chat === "") {
      alert("채팅 내용을 입력해주세요.");
    }

    socket.emit("rooms", { post: name });
    return new Promise(async (res, req) => {
      const url = `/rooms/chat`;
      const data = {
        member_no: info.memberNo,
        room_type: info.roomType,
        room_no: info.roomNo,
        chat: name,
      };
      const result = await httpRequest(`POST`, url, data);

      if (result.success) {
        setInfo({
          ...info,
          chat: message,
        });

        setName("");
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

  //나갔다 들어왔을때 전에 내용 불러옴
  // useEffect(() => {
  //   new Promise(async (res, rej) => {
  //     console.log(`/rooms/chat/${info.roomType}/${info.nick}`);
  //     const url = `/rooms/chat/${info.roomType}/${info.nick}`;
  //     const result = await httpRequest("GET", url);

  //     if (result.success) {
  //       console.log("result", result);
  //     }
  //   });
  // }, []);

  return (
    <>
      <div className="chatForm">
        <div className="chatWindow">
          {/* {type === {type} ? (<`${type}` message={message}/>) } */}
          <Customer message={message} />
        </div>
        <div className="chatInputWrap">
          <input
            className="chatInput"
            placeholder="Write a message.."
            onChange={handleMessage}
            onKeyUp={handleEnterOnMessage}
            value={name}
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
