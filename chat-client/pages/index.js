import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userInfo } from "../src/store/accounts";
import { httpRequest } from "../src/commons/httpRequest";
import { getCookie, removeCookie } from "../src/commons/cookie";
import { useRouter } from "next/router";
import axios from "axios";

const main = () => {
  const route = useRouter();
  const [info, setInfo] = useRecoilState(userInfo);

  const handelLogin = (e) => {
    // setUserNick(e.target.value);
    setInfo({ ...info, nick: e.target.value });
  };

  const handleLoginButton = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      //해당 닉네임이 있는지 조회후 없으면 db에 추가한다
      return new Promise(async (res, rej) => {
        const url = `/login/${info.nick}`;
        const result = await httpRequest("GET", url);
        console.log("result1", result);

        if (result.success && result.data.length < 1) {
          return new Promise(async (res, rej) => {
            const url = `/login/add`;
            const data = {
              nick: info.nick,
            };
            const result = await httpRequest("POST", url, data);

            if (result.success) {
              console.log("result2", result);
              setInfo({
                ...info,
                memberNo: result.data,
              });
              route.replace("/room");
            }
          });
        }
        route.replace("/room");
      });
    }
  };

  useEffect(() => {
    console.log(info);
  }, [info]);
  return (
    <>
      <div className="loginWrap">
        <div className="loginBox">
          <div>Oa Chatting</div>
          <div>
            <input
              className="loginInput"
              onChange={handelLogin}
              onKeyUp={handleLoginButton}
            />
            <button onClick={handleLoginButton}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default main;
