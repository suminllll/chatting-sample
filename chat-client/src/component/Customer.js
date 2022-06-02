import { useEffect, useRef } from "react";

const Customer = ({ messages }) => {
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

  const NoticeMessage = ({ contents, key }) => {
    return (
      <div key={key}>
        <div className="notice">{contents}</div>
      </div>
    );
  };

  const Chat = ({ key, className, nick, time, chat }) => {
    return (
      <div key={key}>
        <div className={className ? "myMsg" : "otherMsg"}>
          {!className && (
            <div className="imgBox">
              <img alt="profileImg" src="/img/profile.jpeg" />
            </div>
          )}
          <div />
          <ul className={className ? "myChatWrap" : "chatWrap"}>
            {!className && <li className="profileName">{nick}</li>}
            <li className="chatList">{chat}</li>
            <li className="time">{time}</li>
          </ul>
        </div>
      </div>
    );
  };
  return (
    <>
      {messages.map((message, index) =>
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
export default Customer;
