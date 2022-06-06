//import styles from "./RoomSelectorBox.module.css";
//방 만들기
export default function RoomSelector(props) {
  return (
    <div className={roomSelectorBox}>
      <div className={joinAndName}>
        <button onClick={props.onClickJoin}>Join</button>
        <p>{props.name}</p>
      </div>
      {props.isRemoveAvailable && (
        <div className={remove}>
          <button onClick={props.onClickRemove}>Remove</button>
        </div>
      )}
    </div>
  );
}
