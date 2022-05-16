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
      setRooms(res.data);
    });
  }, []);

  // useEffect(() => {
  //   socket.on("/socket/v1/room", (stringified) => {
  //     const data = JSON.parse(stringified);

  //     if (data.type === "ROOM_CREATED" || data.type === "ROOM_REMOVED") {
  //       fetchRooms().then((res) => {
  //         setRooms(res.data);
  //       });
  //     }
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  const handleLogout = useCallback(async () => {
    await httpRequest("POST", `/login/logout`);
    route.replace("/");
  }, []);

  //버튼 누르면 해당 채팅방 정보가 info에 담기고 해당 채팅방으로 넘어간다
  const handleRoom = (data) => {
    route.replace(`/room/${data.room_no}`);
  };

  // const handleRoomName = (e) => {
  //   setRoomName(e.target.value);
  // };

  // const handleCreateRoom = async () => {
  //   if (roomName === "") {
  //     alert("Please enter a room name.");
  //     return;
  //   }
  //   const res = await fetchCreateRoom(roomName);
  //   socket.emit("/socket/v1/room", JSON.stringify({ type: "ROOM_CREATED" }));
  //   setRooms((prev) => [...prev, res.data]);
  //   setRoomName("");
  // };

  // const handleClickJoinRoom = (roomId) => {
  //   return async (e) => {
  //     e.stopPropagation();
  //     e.preventDefault();

  //     await fetchJoinRoom(roomId);
  //     router.push(`/rooms/${roomId}`);
  //   };
  // };

  // const handleClickRemoveRoom = (roomId) => {
  //   return async (e) => {
  //     e.stopPropagation();
  //     e.preventDefault();

  //     await fetchRemoveRoom(roomId);
  //     socket.emit("/socket/v1/room", JSON.stringify({ type: "ROOM_REMOVED" }));
  //     setRooms((prev) => prev.filter((room) => room.id !== roomId));
  //   };
  // };

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
      {/* <div className="container">
        <div className="left">
          <div className="roomListBox">
            <input
              name="roomName"
              value={roomName}
              onChange={handleRoomName}
              placeholder="room name"
            />
            <button onClick={handleCreateRoom}>Create Room</button>

            {rooms.length === 0 && (
              <>
                <p>No Rooms</p>
              </>
            )}

            {rooms.map((room) => (
              <RoomSelector
                key={`room_${room.id}`}
                {...room}
                isRemoveAvailable={room.creatorUserId === user.id}
                onClickJoin={handleClickJoinRoom(room.id)}
                onClickRemove={handleClickRemoveRoom(room.id)}
              />
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}
