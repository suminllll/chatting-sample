import { useEffect, useRef } from "react";

const Customer = ({ messages, time, NoticeMessage, whisperUser }) => {
  const bottomRef = useRef();

  //채팅 입력하면 focus가 맨 아래로 맞춰짐
  useEffect(() => {
    bottomRef.current.scrollIntoView({ scroll: "smooth" });
  }, [messages.length]);

  const Chat = ({
    key,
    className,
    nick,
    time,
    chat,
    isWhisper,
    whisperUser,
  }) => {
    console.log("whisperUser3", whisperUser);
    return (
      <ul key={key} className={className ? "talk_myChatWrap" : "otherMsg"}>
        {!className && (
          <div className="imgBox">
            <img alt="profileImg" src="/img/profile.jpeg" />
          </div>
        )}
        <li className={className ? "talk_myChatWrap" : "talk_chatWrap"}>
          <div>
            {!className && <div className="profileName">{nick}</div>}
            {className
              ? "talk_myChatWrap" &&
                isWhisper(
                  <div className="whisperTo">`To '${whisperUser}': `</div>
                )
              : null}
            {className
              ? "talk_chatWrap" &&
                isWhisper(<div className="whisperTo">`From '${nick}': `</div>)
              : null}
            <div className="talk_chatList">{chat}</div>
            <div className="time">{time}</div>
          </div>
        </li>
      </ul>
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
              isWhisper={message.type === "SEND WHISPER"}
              whisperUser={whisperUser}
            />
          )
        )}
      <div ref={bottomRef} />
    </>
  );
};
export default Customer;
