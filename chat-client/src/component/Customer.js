const Customer = ({ contents }) => {
  return (
    <>
      <div className="contentWrap">
        <div className="imgBox">
          <img src="profile.jpeg" />
        </div>
        <ul className="chatWrap">
          <li className="profileName">name</li>
          <li className="chatList">{contents.post}</li>
          <li className="time">time</li>
        </ul>
      </div>
    </>
  );
};
export default Customer;
