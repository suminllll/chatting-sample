import { useEffect, useRef } from "react";

const Chatter = ({ messages }) => {
  const bottomRef = useRef();

  //현재시간 구하기
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const time = `${hours}:${minutes} ${ampm}`;

  //채팅 입력하면 focus가 맨 아래로 맞춰짐
  useEffect(() => {
    bottomRef.current.scrollIntoView({ scroll: "smooth" });
  }, [messages.length]);

  return (
    <>
      {messages.map((message, index) => {
        if (message.type === "SYSTEM_USER_IN") {
          return <div key={index}>{message.nick}가 들어왔습니다. </div>;
        } else if (message.type === "SYSTEM_USER_OUT") {
          return <div key={index}>{message.nick}가 나갔습니다.</div>;
        }
        return (
          <>
            <div key={index} className="chat_otherMsg">
              <div className={message.isMyMessage ? "myMsg" : "otherMsg"}>
                <div className="imgBox">
                  <img alt="profileImg" src="/img/profile.jpeg" />
                </div>
                <div style={{ flex: 1 }} />
                <ul className="chat_chatWrap">
                  <div className="chat_chatBox">
                    <li
                      className={
                        message.isMyMessage
                          ? "chat_my_profileName"
                          : "profileName"
                      }
                    >
                      {message.nick}
                    </li>
                    <li className="time">{time}</li>
                  </div>
                  <li className="chat_chatList">{message.chat}</li>
                </ul>
              </div>
              <div />
            </div>
          </>
        );
      })}
      <div ref={bottomRef} />

      {/* <div>
        <div>
          {getMessages.map((message, index) => {
            //받아온 시간 짜르기
            const sended = message.sended;
            const space = sended.split(" ")[1];
            const hours = space.split(":")[0];
            const minutes = space.split(":")[1];
            const time = `${hours}:${minutes} ${ampm}`;

            return (
              <div key={index}>
                <div className="chat_otherMsg">
                  <div className="chat_imgBox">
                    <img alt="profileImg" src="/img/profile.jpeg" />
                  </div>
                  <ul className="chat_chatWrap">
                    <div className="chat_chatBox">
                      <li className="chat_profileName">{message.nick}</li>
                      <li className="chat_time">{time}</li>
                    </div>
                    <li className="chat_chatList">{message.chat}</li>
                  </ul>
                </div>
              </div>
            );
          })}
          {nowMessages.map((message, index) => {
            return (
              <div key={index}>
                <div className="chat_otherMsg">
                  <div className="chat_imgBox">
                    <img alt="profileImg" src="/img/profile.jpeg" />
                  </div>
                  <ul className="chat_chatWrap">
                    <div className="chat_chatBox">
                      <li className="chat_my_profileName">{message.nick}</li>
                      <li className="chat_time">{time}</li>
                    </div>
                    <li className="chat_chatList">{message.chat}</li>
                  </ul>
                </div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>
      </div> */}
    </>
  );
};
export default Chatter;
