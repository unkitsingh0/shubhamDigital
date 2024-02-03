import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import SideBar from "./components/sideBar/Sidebar";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Products from "./pages/Products";
import Category from "./pages/Category";
function App() {
  let currentTab = useSelector((state) => state.sideBar.currentTab);

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
