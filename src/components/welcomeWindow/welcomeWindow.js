import React from "react";
import HeartButton from "../heartButton/heartButtonAnimation";
import "./welcomeWindow.css";

export default function WelcomeWindow() {
  return (
    <>
         
        <div className="logoDiv">
          <img className="logo" alt="logo" src="./logo.png"/> 
        </div>
        <div className="welcomeWindowImgDiv">
            <HeartButton />
        <img className="welcomeWindowImg" alt="welcomeWindow" src="./welcome-window.png"/>
        </div>
   
    </>
  );
}
