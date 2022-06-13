import { useEffect, useRef } from "react";

const Chat = ({ key, nick, time, chat, isMyMessage, whisperUser, type }) => {
  return (
    <div key={key} className={isMyMessage ? "list_myChatWrap" : "otherMsg"}>
      <div className="imgBox">
        <img alt="profileImg" src="/img/profile.jpeg" />
      </div>
      <div style={{ flex: 1 }} />
      <ul className="list_chat_Wrapper">
        <div className="list_chatBox">
          <li className={isMyMessage ? "list_my_profileName" : "profileName"}>
            {nick}
          </li>
          <li className="time">{time}</li>
        </div>
        <li className="list_chatting">
          {isMyMessage && type === "SEND_WHISPER"
            ? `${whisperUser}님에게 귓속말을 보냈습니다.
        : ${chat}`
            : !isMyMessage && type === "SEND_WHISPER"
            ? `${nick}님이 귓속말을 보냈습니다.
        : ${chat}`
            : chat}
        </li>
      </ul>
    </div>
  );
};

const Chatter = ({ messages, time, NoticeMessage, whisperUser }) => {
  const bottomRef = useRef();

  //채팅 입력하면 focus가 맨 아래로 맞춰짐
  useEffect(() => {
    bottomRef.current.scrollIntoView({ scroll: "smooth" });
  }, [messages.length]);

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
              isMyMessage={message.isMyMessage}
              nick={message.nick}
              chat={message.chat}
              type={message.type}
              time={time}
              whisperUser={whisperUser || message.whisper_user}
            />
          )
        )}

      <div ref={bottomRef} />
    </>
  );
};

export default Chatter;
