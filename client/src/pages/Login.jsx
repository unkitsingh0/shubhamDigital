import axios from "axios";
import "./styles/Login.css";
import React, { useState } from "react";
import BaseUrl from "../components/BaseUrl";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [loginFormData, setloginFormData] = useState({
    email: "",
    password: "",
  });

  const formInputData = (e) => {
    const { name, value } = e.target;
    setloginFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const onFormSubmite = async (e) => {
    //Preventing default behavior . Stoping page from reload
    e.preventDefault();
    try {
      let { data } = await axios.post(`${BaseUrl}/api/auth/login`, {
        email: loginFormData.email,
        password: loginFormData.password,
      });
      if (data.status === "Success") {
        localStorage.setItem("token", data.token);
        navigate("/");
      }
    } catch (error) {
      alert("Invalid password or email");
    }
  };
  return (
    <>
      <div className=" wrapper bg-light w-100">
        <div className="login shadow p-3 mb-5 bg-body rounded">
          <img
            id="loginImg"
            src="https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png"
            alt=""
          />
          <p className="d-flex justify-content-center">
            Welcome to Digitalflake Admin
          </p>
          <form className="needs-validation" onSubmit={onFormSubmite}>
            <div className="form-group mb-2 was-validated">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                onChange={formInputData}
                value={loginFormData.email}
                name="email"
              />
            </div>
            <div className="form-group mb-2 was-validated">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={formInputData}
                value={loginFormData.password}
                name="password"
              />
              <div className="forgotPassword">
                <Link data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Forgot Password
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="btn  w-100 mt-2"
              style={{ backgroundColor: "#5c218b", color: "white" }}
            >
              Login
            </button>
          </form>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Did you forget your password?
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="text"
                    style={{ width: "100%", padding: "3px" }}
                  />
                  <button
                    style={{
                      marginTop: "3px",
                      padding: "10px",
                      backgroundColor: "#5c218b",
                      border: "none",
                      borderRadius: "2px",
                      color: "white",
                      width: "100%",
                    }}
                  >
                    Request reset link
                  </button>
                </div>
                <div class="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
