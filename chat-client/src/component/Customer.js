import useGuard from "../../src/hooks/useGuard";

const Customer = ({ messages, users }) => {
  const { user } = useGuard();
  //console.log("messages", messages);
  //현재시간 구하기
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const time = `${hours}:${minutes} ${ampm}`;

  // console.log("message", messages);
  return (
    <>
      <div>
        <div>
          {messages.map((message) => {
            return (
              <div className="contentWrap" key={message.chat_no}>
                <div className="imgBox">
                  <img alt="profileImg" src="/img/profile.jpeg" />
                </div>
                <ul className="chatWrap">
                  <li className="profileName">{message.nick}</li>
                  <li className="chatList">{message.chat}</li>
                  <li className="time">{time}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Customer;
