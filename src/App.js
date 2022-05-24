import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home/Home";
import Footer from "./Page/Footer/Footer";

import Navbar from "./Page/Home/Navbar";
import Login from "./Page/component/Login/Login";
import SignUp from "./Page/component/Login/SignUp";
import Purchase from "./Page/component/Purchase/Purchase";
import Dashboard from "./Page/component/Dashboard/Dashboard";
import MyOrder from "./Page/component/Dashboard/MyOrder";
import Myreview from "./Page/component/Dashboard/Myreview";
import MyProfile from "./Page/component/Dashboard/MyProfile";
import UpdateProfile from "./Page/component/Dashboard/UpdateProfile";
import Users from "./Page/component/Dashboard/Users";
import ManageProducts from "./Page/component/Dashboard/ManageProducts";
import AddProduct from "./Page/component/Dashboard/AddProduct";
import ManageOrders from "./Page/component/Dashboard/ManageOrders";
import MyPortfolio from "./Page/component/Dashboard/MyPortfolio";
import NotFound from "./Page/component/NotFound";
import Payment from "./Page/component/Dashboard/Payment";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/service/:id" element={<Purchase></Purchase>}></Route>
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<Myreview></Myreview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<Users></Users>}></Route>

          <Route
            path="manageProduct"
            element={<ManageProducts></ManageProducts>}
          ></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="manageOrder"
            element={<ManageOrders></ManageOrders>}
          ></Route>
          <Route
            path="profile/:id"
            element={<UpdateProfile></UpdateProfile>}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
