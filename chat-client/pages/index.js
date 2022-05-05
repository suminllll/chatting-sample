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

  const nick = info.nick;

  const handleLoginButton = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      //해당 닉네임이 있는지 조회후 없으면 db에 추가한다
      return new Promise(async (res, rej) => {
        const url = `/login/${nick}`;
        const result = await httpRequest("GET", url);

        if (result.success && result.data.length < 0) {
          return new Promise(async (res, rej) => {
            const url = `/login/add`;
            const data = {
              nick: nick,
            };
            const result = await httpRequest("POST", url, data);

            if (result.success) {
              return;
            }
          });
        }
        route.replace("/room");
      });
    }
  };

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
