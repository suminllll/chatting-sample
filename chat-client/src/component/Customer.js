import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Chat = ({ key, nick, time, chat, isMyMessage, whisperUser, type }) => {
  return (
    <ul key={key} className={isMyMessage ? "talk_myChatWrap" : "otherMsg"}>
      {!isMyMessage && (
        <div className="imgBox">
          <img alt="profileImg" src="/img/profile.jpeg" />
        </div>
      )}
      <li className={isMyMessage ? "talk_myChatWrap" : "talk_chatWrap"}>
        <div>
          {!isMyMessage && <div className="profileName">{nick}</div>}

          <div key={key} className="talk_chatList">
            {isMyMessage && type === "SEND_WHISPER"
              ? `${whisperUser}님에게 귓속말을 보냈습니다.
        : ${chat}`
              : !isMyMessage && type === "SEND_WHISPER"
              ? `${nick}님이 귓속말을 보냈습니다.
        : ${chat}`
              : chat}
          </div>
          <div className="time">{time}</div>
        </div>
      </li>
    </ul>
  );
};
// Chat.propTypes = {
//   key: PropTypes.number.isRequired,
// };
const Customer = ({ messages, NoticeMessage, time }) => {
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
            <NoticeMessage index={index} contents={message.content} />
          ) : (
            <Chat
              key={index}
              isMyMessage={message.isMyMessage}
              nick={message.nick}
              chat={message.chat}
              type={message.type}
              time={time}
              whisperUser={message.whisperUser || message.whisper_user}
            />
          )
        )}
      <div ref={bottomRef} />
    </>
  );
};

export default Customer;
