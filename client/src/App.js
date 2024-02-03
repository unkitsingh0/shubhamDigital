import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import SideBar from "./components/sideBar/Sidebar";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import Products from "./pages/Products";
import Category from "./pages/Category";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  let navigate = useNavigate();
  let currentTab = useSelector((state) => state.sideBar.currentTab);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      return navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <Navbar></Navbar>
      <div className="App">
        {/* side bar */}
        <div className="sideBar">
          <SideBar />
        </div>

        {/* pages */}
        <div className="pages">
          {currentTab === "Home" ? <Home /> : ""}
          {currentTab === "Category" ? <Category /> : ""}
          {currentTab === "Products" ? <Products /> : ""}
        </div>
      </div>
    </>
  );
}

export default App;
