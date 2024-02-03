import "../pages/styles/AddCategory.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/sideBar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
import BaseUrl from "../components/BaseUrl";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function AddProduct() {
  let navigate = useNavigate();
  let [productName, setProductName] = useState("");
  let [packSize, setPackSize] = useState("");
  let [mrp, setMrp] = useState("");
  let [status, setStatus] = useState("");
  let [selectedCategory, setSelectedCategory] = useState("");
  let [category, setCategory] = useState(undefined);
  const handelSubmit = async (e) => {
    try {
      let { data } = await axios.post(`${BaseUrl}/api/product`, {
        category: selectedCategory,
        productName,
        packSize,
        mrp,
        status,
      });
      navigate("/");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  async function getCategory() {
    try {
      let { data } = await axios.get(`${BaseUrl}/api/category`);
      console.log(data);
      setCategory(data.data);
    } catch (error) {
      alert("Something went worng");
    }
  }
  useEffect(() => {
    getCategory();
  }, []);

  if (!category) {
    return (
      <>
        <h1>Loding</h1>
      </>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="addProduct">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="main">
          <div>
            {/* <span></span> */}

            <h5>
              {" "}
              <ArrowBackIcon
                onClick={(e) => {
                  navigate("/");
                }}
              ></ArrowBackIcon>{" "}
              Add Product
            </h5>
          </div>
          <div className="m-auto">
            <div className="row g-3">
              <div className="col">
                <label htmlFor="">Category</label>
                <select
                  className="form-select"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value=""></option>
                  {category &&
                    category.map((category) => {
                      return (
                        <option
                          value={category.category}
                          key={category.category}
                        >
                          {category.category}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col">
                <label htmlFor="">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="">Pack size</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setPackSize(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="row g-3">
              <div className="col">
                <label htmlFor="">MRP</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setMrp(e.target.value);
                  }}
                />
              </div>

              <div className="col">
                <label htmlFor="">status</label>
                <select
                  className="form-select"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value={""}></option>
                  <option value={"Active"}>Active</option>
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
              onClick={(e) => navigate("/")}
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
    </>
  );
}
