import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userInfo } from "../../src/store/accounts";
import { httpRequest } from "../../src/commons/httpRequest";
import { useRouter } from "next/router";
import useGuard from "../../src/hooks/useGuard";

const room = () => {
  const route = useRouter();
  const [info, setInfo] = useRecoilState(userInfo);
  const [data, setData] = useState([]);
  const { user } = useGuard();
  const [room, setRoom] = useState([]);

  // useEffect(() => {
  //   axios.get(`/api/room/`).then((res) => {
  //     setRooms(res.data);
  //     console.log(res.data);
  //   });
  // }, []);

  useEffect(() => {
    new Promise(async (res, rej) => {
      const url = `/rooms`;
      const result = await httpRequest("GET", url);

      if (result.success) {
        setData(result.data);
      }
    });
  }, []);

  const handleLogout = async () => {
    await httpRequest("POST", `/login/logout`);
    route.replace("/");
  };
  //버튼 누르면 해당 채팅방 정보가 info에 담기고 해당 채팅방으로 넘어간다
  const handleRoom = (data) => {
    setInfo({
      ...info,
      roomNo: data.room_no,
      roomTitle: data.room_title,
    });
    route.replace(`/room/${data.room_no}`);
  };

  return (
    <>
      <div>
        <h3>{`반갑습니다 ${user?.nick}님.`}</h3>
      </div>
      <div className="buttonWrap">
        {data.map((data) => {
          return (
            <div key={data.room_no}>
              <button className="roomButton" onClick={() => handleRoom(data)}>
                {data.room_title}
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default room;

// export async function getServerSideProps(context) {
//   console.log(context.resolvedUrl);
//   const guardResult = await authenticationGuard(context);
//   if (guardResult.type === "REDIRECT") {
//     return { redirect: guardResult.redirect };
//   }

//   return {
//     props: {
//       user: guardResult.response.data.data[0],
//     },
//   };
// }
