import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Customer from "../../../component/Customer";
import { httpRequest } from "../../../src/commons/httpRequest";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userInfo } from "../../../src/store/accounts";

const socket = io("http://localhost:8000", { transports: ["websocket"] });

const chatRoom = () => {
  const [name, setName] = useState("");
  const [contents, setContents] = useState([]);
  const [info, setInfo] = useRecoilState(userInfo);

  const handleContent = (e) => {
    setName(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      //보내다 emit
      socket.emit("rooms", { post: name });
      setName("");
    }
  };

  socket.on("data", (data) => {
    setContents([...contents, data]);
  });

  socket.on("connect_error", (error) => {
    console.log("err", error);
  });

  useEffect(() => {
    new Promise(async (res, req) => {
      const url = `/rooms/chat`;
      const data = {
        member_no: info.memberNo,
        room_no: info.roomNo,
        chat: contents.post,
      };
      const result = await httpRequest(`POST`, url, data);

      if (result.success) {
        console.log("success");
      }
    });
  }, []);

  return (
    <>
      <div className="chatForm">
        <div className="chatWindow">
          <Customer contents={contents} />
        </div>
        <div className="chatInputWrap">
          <input
            className="chatInput"
            placeholder="Write a message.."
            onChange={handleContent}
            onKeyUp={handleSend}
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
