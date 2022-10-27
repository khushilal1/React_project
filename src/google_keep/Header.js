import React from "react";
import logo from "../image/logo.png";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="" className="img" />
        <span className="header_content">Diary</span><p className="para">This is the diary where you can add the detrail  and delete at any time with the simple click.</p>
      </div>
    </>
  );
}

export default Header;
