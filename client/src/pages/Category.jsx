import "./styles/category.css";
import React, { useEffect, useState } from "react";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../components/BaseUrl";
function Category() {
  let [categoryData, setCategoryData] = useState(undefined);
  let navigate = useNavigate();
  async function getCategory() {
    try {
      let { data } = await axios.get(`${BaseUrl}/api/category`);
      setCategoryData(data.data);
    } catch (error) {
      alert("Something went wrong");
    }
  }
  useEffect(() => {
    getCategory();
  }, []);
  if (!categoryData) {
    return (
      <>
        <h1>loding</h1>
      </>
    );
  }

  return (
    <div className="Categroy">
      <div className="header">
        <h2>
          <Inventory2OutlinedIcon style={{ height: "100px" }} /> Categroy
        </h2>
        <input type="text" />
        <button
          style={{
            backgroundColor: "#5c218b",
            color: "white",
            border: "none",
            padding: "5px",
            borderRadius: "3px",
          }}
          onClick={(e) => {
            navigate("/addcategory");
          }}
        >
          Add New
        </button>
      </div>
      <div className="tableP">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {categoryData &&
              categoryData.map((category, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 101}</th>
                    <td>{category.category}</td>
                    <td>{category.description}</td>
                    <td
                      style={{
                        color: `${
                          category.status === "Active" ? "Green" : "red"
                        }`,
                      }}
                    >
                      {category.status}
                    </td>
                    <td>
                      <EditNoteIcon />
                    </td>
                    <td>
                      <DeleteOutlineIcon />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
