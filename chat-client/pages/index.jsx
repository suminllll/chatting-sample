import { useState, useCallback } from "react";
import { httpRequest } from "../src/commons/httpRequest";
import { useRouter } from "next/router";

const login = () => {
  const route = useRouter();
  const [info, setInfo] = useState({
    id: "",
    password: "",
  });

  const { id, password } = info;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  //room_title을 불러와서 버튼에 뿌려줌
  //   const handleLogin =
  //     await httpRequest("POST", `/login/add`, info);
  //     route.replace("/room");
  //   }, [info]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await httpRequest("GET", `/login`, info);

    if (result.success) {
      console.log("good");
      route.replace("/room");
    } else {
      alert("please check your info or please join");
    }
  };
  // var xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState === xhr.DONE) {
  //     if (xhr.status === 200 || xhr.status === 201) {
  //       console.log(xhr.responseText);
  //     } else {
  //       console.error(xhr.responseText);
  //     }
  //   }
  // };
  // xhr.open("POST", "http://localhost:3000/auth/login");
  // xhr.setRequestHeader("Content-type", "application/json");
  // xhr.send(JSON.stringify({ id: id.value, password: password.value }))}

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
      <main className="loginWrap">
        <div className="loginBox">
          <div>Oa Chatting</div>
          <form
            onKeyUp={handleKeyEnter}
            onSubmit={handleLogin}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>
              ID:
              <input name="id" value={id} onChange={handleChange} />
            </label>
            <label>
              PW:
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleLogin}>Login</button>
          </form>
          <button onClick={() => route.replace(`/join/`)}>Join</button>
        </div>
      </main>
    </>
  );
};

export default login;
