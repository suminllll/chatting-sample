import { useEffect, useState, useCallback } from "react";
import { httpRequest } from "../../src/commons/httpRequest";
import { useRouter } from "next/router";

import useGuard from "../../src/hooks/useGuard";

export default function room() {
  const route = useRouter();
  const { user } = useGuard();
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    httpRequest("GET", `/rooms`).then((res) => {
      console.log("room", res);
      setRooms(res.data);
    });
  }, []);

  const handleLogout = useCallback(async () => {
    await httpRequest("POST", `/login/logout`);
    route.replace("/");
  }, []);

  //버튼 누르면 해당 채팅방 정보가 info에 담기고 해당 채팅방으로 넘어간다
  const handleRoom = (data) => {
    route.replace(`/room/${data.room_no}`);
  };

  return (
    <>
      <div className="header">
        <div className="helloNick">{`반갑습니다 ${user?.nick}님.`}</div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="buttonWrap">
        {rooms.map((room) => {
          return (
            <div key={room.room_no}>
              <button className="roomButton" onClick={() => handleRoom(room)}>
                {room.room_title}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
