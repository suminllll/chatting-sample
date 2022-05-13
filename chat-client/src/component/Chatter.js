import { useEffect, useRef } from "react";

const Chatter = ({ nowMessages, comeMessage, getMessages, users }) => {
  const bottomRef = useRef();

  //console.log("messages", messages);
  //현재시간 구하기
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const time = `${hours}:${minutes} ${ampm}`;

  //채팅 입력하면 focus가 맨 아래로 맞춰짐
  useEffect(() => {
    bottomRef.current.scrollIntoView({ scroll: "smooth" });
  }, [nowMessages.length]);

  return (
    <>
      <div>
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
          {users.map((user, index) => {
            return (
              <div className="users_notice" key={index}>
                {comeMessage === "in" && (
                  <div>{user.nick}님이 들어오셨습니다.</div>
                )}
              </div>
            );
          })}
          {users.map((user, index) => {
            return (
              <div className="users_notice" key={index}>
                {comeMessage === "out" && (
                  <div>{user.nick}님이 나가셨습니다.</div>
                )}
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
      </div>
    </>
  );
};
export default Chatter;
