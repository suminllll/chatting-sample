import { useRecoilState, useResetRecoilState } from "recoil";
import { userInfo } from "../../src/store/accounts";
import { httpRequest } from "../../src/commons/httpRequest";

const Customer = ({ contents }) => {
  const [info, setInfo] = useRecoilState(userInfo);

  //현재시간 구하기
  let date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var time = `${hours}:${minutes} ${ampm}`;

  //채팅 불러오기
  //console.log("chat", info);
  // useEffect(() => {}, []);

  return (
    <>
      <div>
        {contents.map((data, index) => {
          return (
            <div className="contentWrap" key={index}>
              <div className="imgBox">
                <img alt="profileImg" src="/img/profile.jpeg" />
              </div>
              <ul className="chatWrap">
                <li className="profileName">{info.nick}</li>
                <li className="chatList">{data.post}</li>
                <li className="time">{time}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Customer;
