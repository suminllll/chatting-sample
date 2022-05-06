import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Customer from "../../../src/component/Customer";
import { httpRequest } from "../../../src/commons/httpRequest";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userInfo } from "../../../src/store/accounts";

const socket = io("http://localhost:8000", { transports: ["websocket"] });

const chatRoom = () => {
  const [name, setName] = useState("");
  const [contents, setContents] = useState([]);
  const [info, setInfo] = useRecoilState(userInfo);

  useEffect(() => {
    const type = info.roomTitle.split(" ")[0];
    setInfo({
      ...info,
      roomType: type,
    });
    console.log("room", info);
  }, []);

  const handleContent = (e) => {
    setName(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      if (name.length > 0) {
        //보내다 emit
        socket.emit("rooms", { post: name });

        setName("");
        sendMessages();
      } else {
        alert("채팅 내용을 입력해주세요.");
      }
    }
  };

  socket.on("data", (data) => {
    setContents([...contents, data]);
  });

  socket.on("connect_error", (error) => {
    console.log("err", error);
  });

  console.log("name", name);
  console.log("contents", contents);
  const sendMessages = () => {
    return new Promise(async (res, req) => {
      const url = `/rooms/chat`;
      const data = {
        member_no: info.memberNo,
        room_no: info.roomNo,
        chat: name,
      };
      const result = await httpRequest(`POST`, url, data);

      if (result.success) {
        setInfo({
          ...info,
          chat: contents,
        });
      }
    });
  };

  //   useEffect(() => {
  //     console.log(info);
  //   }, [info]);

  return (
    <>
      <div className="chatForm">
        <div className="chatWindow">
          {/* {type === {type} ? (<`${type}` contents={contents}/>) } */}
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