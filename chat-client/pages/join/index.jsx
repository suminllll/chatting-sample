import { useState, useCallback } from "react";
import { httpRequest } from "../../src/commons/httpRequest.js";
import { useRouter } from "next/router";

export default function Join() {
  const route = useRouter();
  const [info, setInfo] = useState({
    id: "",
    password: "",
    nick: "",
  });

  const { id, password, nick } = info;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleJoin = async (e) => {
    e.preventDefault();
    console.log("e", info);
    const result = await httpRequest("POST", `/login`, info);
    console.log("result", result);
    if (result.success) {
      console.log("회원가입 성공!");
      route.replace("/room");
    } else if (result.data === "Conflict") {
      alert("이미 가입되어 있는 회원입니다.");
    }
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      console.log("keye", e);
      e.preventDefault();
      handleJoin();
    }
  };

  return (
    <>
      <form
        onKeyDown={handleKeyEnter}
        onSubmit={handleJoin}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>
          ID:
          <input type="text" name="id" value={id} onChange={handleChange} />
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
        <label>
          Nick Name:
          <input name="nick" value={nick} onChange={handleChange} />
        </label>
        <button type="submit" onClick={handleJoin}>
          Join
        </button>
      </form>
    </>
  );
}
