import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import LogIn from "./pages/login/LogIn";
import ProductList from "./pages/admin_pages/product_list/ProductList";
import Register from "./pages/register/Register";
import UserList from "./pages/admin_pages/userList/UserList";
import LandingPage from "./pages/user/LandingPage";
import ProductDetail from "./pages/user/productDetail/ProductDetail";
import AddProduct from "./pages/admin_pages/add_products/AddProduct";
import Verify from "./pages/verify/Verify";
import ResetPassword from "./pages/reset_password/ResetPassword";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/admin/" element={<Home />} />
        <Route path="/admin/users" element={<UserList />} />
        {/* <Route path="/user/:userId" element={<User />} /> */}
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/addproduct" element={<AddProduct />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/productdetail/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify/:verifytoken" element={<Verify />} />
        <Route path="/reset-password/:resetpasswordtoken" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
