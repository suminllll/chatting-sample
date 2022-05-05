import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userInfo } from "../../src/store/accounts";
import { httpRequest } from "../../src/commons/httpRequest";
import { getCookie, removeCookie } from "../../src/commons/cookie";
import { useRouter } from "next/router";
import axios from "axios";

const room = () => {
  const route = useRouter();
  const [info, setInfo] = useRecoilState(userInfo);
  let [data, setData] = useState([]);

  useEffect(() => {
    new Promise(async (res, rej) => {
      const url = `/rooms`;
      const result = await httpRequest("GET", url);

      if (result.success) {
        return setData(result.data);
      }
    });
  }, []);

  //버튼 누르면 해당 채팅방으로 넘어가기

  return (
    <>
      <div className="buttonWrap">
        {data.map((data) => {
          return (
            <div key={data.room_no}>
              <button className="roomButton">{data.room_title}</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default room;
