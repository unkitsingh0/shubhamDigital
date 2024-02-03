import "../pages/styles/AddCategory.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../components/BaseUrl";
import axios from "axios";
import SideBar from "../components/sideBar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function AddCategory() {
  let [category, setCategory] = useState("");
  let [description, setDescription] = useState("");
  let [status, setStatus] = useState("");
  let navigate = useNavigate();

  const handelSubmit = async (e) => {
    try {
      let { data } = await axios.post(`${BaseUrl}/api/category`, {
        category,
        description,
        status,
      });
      navigate("/");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="addProduct">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="main">
          <div>
            <h5>
              {" "}
              <ArrowBackIcon
                onClick={(e) => {
                  navigate("/");
                }}
              ></ArrowBackIcon>{" "}
              Add Category
            </h5>
            <div>
              <div className="row g-3">
                <div className="col">
                  <label htmlFor="">Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                </div>
                <div className="col">
                  <label htmlFor="">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="col">
                  <label htmlFor="">Status</label>
                  {/* <input type="text" className="form-control" /> */}
                  <select
                    className="form-select"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option value=""></option>
                    <option value="Active">Active</option>
                    <option value={"Inactive"}>Inactive</option>
                  </select>
                </div>
              </div>
              <button
                style={{
                  position: "absolute",
                  bottom: "30px",
                  right: "120px",
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid gray",
                  padding: "5px",
                  borderRadius: "3px",
                }}
                onClick={(e) => {
                  navigate("/");
                }}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={handelSubmit}
                style={{
                  position: "absolute",
                  bottom: "30px",
                  right: "30px",
                  backgroundColor: "#5c218b",
                  color: "white",
                  border: "none",
                  padding: "5px",
                  borderRadius: "3px",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
