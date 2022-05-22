import { Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/service/:id" element={<Purchase></Purchase>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<Myreview></Myreview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
        </Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
