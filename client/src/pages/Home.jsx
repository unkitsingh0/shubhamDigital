import React from "react";
import "./styles/home.css";
import homeImg from "../images/homeImg.jpg";

function Home() {
  return (
    <div className="Home">
      <img src={homeImg} alt="" style={{ width: "341px" }} />
      <h1>Welcome to Digitalflake Admin</h1>
    </div>
  );
}

export default Home;
