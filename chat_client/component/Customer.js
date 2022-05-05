import React, { Component } from "react";

const Customer = ({ contents }) => {
  return (
    <>
      <div>
        {contents.map((contents, index) => {
          return (
            <div className="contentWrap" key={index}>
              <div className="imgBox">
                <img src="/img/profile.jpeg" />
              </div>
              <ul className="chatWrap">
                <li className="profileName">name</li>
                <li className="chatList">{contents.post}</li>
                <li className="time">time</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Customer;
