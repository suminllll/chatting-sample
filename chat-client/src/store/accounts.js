import { atom } from "recoil";

export const userInfo = atom({
  key: "userInfo",
  default: {
    nick: "",
    memberNo: "",
    roomType: "",
    roomNo: "",
    roomTitle: "",
    chat: "",
  },
});
