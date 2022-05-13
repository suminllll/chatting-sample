import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { httpRequest } from "../commons/httpRequest";

//쿠키를 서버에 보내서 토큰이 있는지 검사하는 로직
export default function useGuard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  //로그인 정보를 가져와서 정보가 없으면 로그인 화면으로 전환(토큰도 함께 검사)
  useEffect(() => {
    httpRequest("GET", "/login/info")
      .then((res) => {
        setUser(res.data[0]);
      })
      .catch((e) => {
        alert("로그인 하세요.");
        router.push("/");
      });
  }, []);

  return {
    user,
  };
}
