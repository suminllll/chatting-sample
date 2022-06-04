import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { userInfo } from "../src/store/accounts";
import { httpRequest } from "../src/commons/httpRequest";
import { useRouter } from "next/router";

const main = () => {
  const route = useRouter();
  const [info, setInfo] = useRecoilState(userInfo);

  //입력한 닉네임이 저장됨
  const handleInputNickname = (e) => {
    setInfo({ ...info, nick: e.target.value });
  };

  //room_title을 불러와서 버튼에 뿌려줌
  const handleLogin = useCallback(async () => {
    await httpRequest("POST", `/login/add`, info);
    route.replace("/room");
  }, [info]);

  //닉네임 입력후 엔터를 누르면 login 함수를 호출
  const handleKeyEnter = useCallback(
    async (e) => {
      if (e.key === "Enter") {
        handleLogin();
      }
    },
    [handleLogin]
  );

  return (
    <>
      <div className="loginWrap">
        <div className="loginBox">
          <div>Oa Chatting</div>
          <div>
            <input
              className="loginInput"
              onChange={handleInputNickname}
              onKeyUp={handleKeyEnter}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default main;
