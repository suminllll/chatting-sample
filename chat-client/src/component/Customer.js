import { useEffect, useRef } from "react";

const Customer = ({ nowMessages, comeMessage, getMessages }) => {
  const bottomRef = useRef();

  //console.log("messages", messages);
  //현재시간 구하기
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const time = `${hours}:${minutes} ${ampm}`;

  useEffect(() => {
    bottomRef.current.scrollIntoView({ scroll: "smooth" });
  }, [nowMessages.length]);

  //받아온 시간 짜르기
  useEffect(() => {
    const sended = getMessages.sended;
  }, [getMessages]);

  return (
    <>
      <div>
        <div>
          {getMessages.map((message, index) => {
            return (
              <div key={index}>
                <div className="otherMsg">
                  <div className="imgBox">
                    <img alt="profileImg" src="/img/profile.jpeg" />
                  </div>
                  <ul className="chatWrap">
                    <li className="profileName">{message.nick}</li>
                    <li className="chatList">{message.chat}</li>
                    <li className="time">{message.sended}</li>
                  </ul>
                </div>
                <div />
              </div>
            );
          })}
          {nowMessages.map((message, index) => {
            return (
              <div key={index}>
                <div className="myMsg">
                  <div>
                    <ul className="chatWrap">
                      <li className="profileName">{message.nick}</li>
                      <li className="chatList">{message.chat}</li>
                      <li className="time">{time}</li>
                    </ul>
                  </div>
                </div>
                <div>
                  {comeMessage === "in" && (
                    <div>{message.nick}님이 들어오셨습니다.</div>
                  )}
                  {comeMessage === "out" && (
                    <div>{message.nick}님이 나가셨습니다.</div>
                  )}
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
export default Customer;
