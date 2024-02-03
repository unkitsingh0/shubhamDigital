import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";
function Navbar() {
  let navigate = useNavigate();
  let [logoutToggle, setLogoutToggle] = useState(false);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#5c218b", color: "white" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"} style={{ color: "white" }}>
            DigitalFlake
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"></a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <AccountCircleOutlinedIcon
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
                onClick={(e) => {
                  setLogoutToggle(!logoutToggle);
                }}
              ></AccountCircleOutlinedIcon>
            </form>
          </div>
        </div>
      </nav>
      <button
        className="btn btn-outline-danger"
        style={{
          position: "absolute",
          right: "5px",
          display: `${logoutToggle ? "" : "none"}`,
        }}
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
