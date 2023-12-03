import React from "react";
import HeartButton from "../heartButton/heartButton";
import "./welcomeWindow.css";

export default function WelcomeWindow() {
  return (
    <>
      <div className="allContent">
        <div className="logoDiv">
          <img className="logo" alt="logo" src="./logo.png"/> 
        </div>
        <div className="top">
          <div className="welcome">welcome</div>
          <div className="heartButton">
            <HeartButton />
          </div>
        </div>
        <div className="mainWindow">login button</div>
      </div>
    </>
  );
}
