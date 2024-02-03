import "./styles/category.css";
import React, { useEffect, useState } from "react";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../components/BaseUrl";
function Products() {
  let navigate = useNavigate();
  let [productData, setProductData] = useState();

  async function getProducts() {
    try {
      let { data } = await axios.get(`${BaseUrl}/api/product`);
      setProductData(data.data);
    } catch (error) {
      alert("something went wrong");
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="Categroy">
      <div className="header">
        <h2>
          <Inventory2OutlinedIcon style={{ height: "100px" }} /> Products
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
            navigate("/AddProduct");
          }}
        >
          {" "}
          Add New
        </button>
      </div>
      <div className="tableP">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Pack Size</th>
              <th scope="col">Category</th>
              <th scope="col">MRP</th>
              <th scope="col">Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {productData &&
              productData.map((product, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 101}</th>
                    <td>{product.productName}</td>
                    <td>{product.packSize}</td>
                    <td>{product.category}</td>
                    <td>{product.mrp}</td>
                    <td
                      style={{
                        color: `${
                          product.status === "Active" ? "Green" : "red"
                        }`,
                      }}
                    >
                      {product.status}
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

export default Products;
