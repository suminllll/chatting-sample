import { useEffect, useRef } from "react";

const Chatter = ({ messages, time, NoticeMessage }) => {
  const bottomRef = useRef();

  //채팅 입력하면 focus가 맨 아래로 맞춰짐
  useEffect(() => {
    bottomRef.current.scrollIntoView({ scroll: "smooth" });
  }, [messages.length]);

  const Chat = ({ key, className, nick, time, chat }) => {
    return (
      <div key={key} className="chat_otherMsg">
        <div className={className ? "myMsg" : "otherMsg"}>
          <div className="imgBox">
            <img alt="profileImg" src="/img/profile.jpeg" />
          </div>
          <div style={{ flex: 1 }} />
          <ul className="chat_chatWrap">
            <div className="chat_chatBox">
              <li className={className ? "chat_my_profileName" : "profileName"}>
                {nick}
              </li>
              <li className="time">{time}</li>
            </div>
            <li className="chat_chatList">{chat}</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      {messages &&
        messages.map((message, index) =>
          message.type === "SYSTEM_USER_IN" ||
          message.type === "SYSTEM_USER_OUT" ? (
            <NoticeMessage key={index} contents={message.content} />
          ) : (
            <Chat
              key={index}
              className={message.isMyMessage}
              nick={message.nick}
              chat={message.chat}
              time={time}
            />
          )
        )}

      <div ref={bottomRef} />
    </>
  );
};

export default Chatter;
