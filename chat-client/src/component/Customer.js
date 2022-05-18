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

  //console.log("messages", userList);
  return (
    <>
      {messages.map((message, index) => {
        if (message.type === "SYSTEM_USER_IN") {
          return <div key={index}>{message.nick}가 들어왔습니다. </div>;
        } else if (message.type === "SYSTEM_USER_OUT") {
          return <div key={index}>{message.nick}가 나갔습니다.</div>;
        }

        return (
          <div key={index}>
            <div className={message.isMyMessage ? "myMsg" : "otherMsg"}>
              {!message.isMyMessage && (
                <div className="imgBox">
                  <img alt="profileImg" src="/img/profile.jpeg" />
                </div>
              )}

              <div />
              <ul className="chatWrap">
                {!message.isMyMessage && (
                  <li className="profileName">{message.nick}</li>
                )}
                <li className="chatList">{message.chat}</li>
                <li className="time">{time}</li>
              </ul>
            </div>
            <div />
          </div>
        );
      })}
      <div ref={bottomRef} />
    </>
  );
};
export default Customer;
