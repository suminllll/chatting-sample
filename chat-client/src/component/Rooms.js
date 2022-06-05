import Chatter from "./Chatter";
import Customer from "./Customer";

const Rooms = ({ messages, room }) => {
  //현재시간 구하기
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const time = `${hours}:${minutes} ${ampm}`;

  const NoticeMessage = ({ contents, key }) => {
    return (
      <div key={key}>
        <div className="notice">{contents}</div>
      </div>
    );
  };

  return (
    <>
      {room && room === "Customer Service" ? (
        <Customer
          messages={messages}
          time={time}
          NoticeMessage={NoticeMessage}
        />
      ) : room === "Chatter" ? (
        <Chatter
          messages={messages}
          time={time}
          NoticeMessage={NoticeMessage}
        />
      ) : null}
    </>
  );
};

export default Rooms;
