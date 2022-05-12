import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userInfo } from "../src/store/accounts";
import { httpRequest } from "../src/commons/httpRequest";
import { useRouter } from "next/router";

const main = () => {
  const route = useRouter();
  const [info, setInfo] = useRecoilState(userInfo);

  const handelLogin = (e) => {
    setInfo({ ...info, nick: e.target.value });
  };

  const handleLoginButton = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      // if (result.success && result.data.length < 1) {
      return new Promise(async (res, rej) => {
        const url = `/login/add`;
        const data = {
          nick: info.nick,
        };
        const result = await httpRequest("POST", url, data);

        if (result.success) {
          setInfo({
            ...info,
            memberNo: result.data,
          });
          route.replace("/room");
        }
      });
      //}
      // route.replace("/room");
      // });
    }
  };

  // useEffect(() => {
  //   console.log(info);
  // }, [info]);

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
