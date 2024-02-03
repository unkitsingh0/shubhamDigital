import React, { useState } from "react";
import "./style/sideBar.css";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CategoryIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { useDispatch, useSelector } from "react-redux";
import { currentTab } from "../../redux/slice/sideBarSlice";

function SideBar() {
  let dispatch = useDispatch();
  // let [currentPage, setCurrentPage] = useState("Home");
  let currentPage = useSelector((state) => state.sideBar.currentTab);
  // console.log(state);
  return (
    <div className="sideBarComponent">
      <ul className="pageList">
        <li
          className={currentPage === "Home" ? "selectedPage" : ""}
          onClick={(e) => {
            // setCurrentPage("Home");
            dispatch(currentTab("Home"));
          }}
        >
          <span>
            <HomeIcon />
            Home
          </span>
          <ArrowRightIcon className="arrowIcon" />
        </li>

        <li
          className={currentPage === "Category" ? "selectedPage" : ""}
          onClick={(e) => {
            // setCurrentPage("Category");
            dispatch(currentTab("Category"));
          }}
        >
          <span>
            <CategoryIcon></CategoryIcon>
            Category
          </span>
          <ArrowRightIcon className="arrowIcon" />
        </li>
        <li
          className={currentPage === "Products" ? "selectedPage" : ""}
          onClick={(e) => {
            // setCurrentPage("Products");
            dispatch(currentTab("Products"));
          }}
        >
          <span>
            <Inventory2OutlinedIcon></Inventory2OutlinedIcon>
            Products
          </span>
          <ArrowRightIcon className="arrowIcon" />
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
