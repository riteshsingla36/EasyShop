import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import LogIn from "./pages/login/LogIn";
import ProductList from "./pages/products/ProductList";
import Register from "./pages/register/Register";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="admin/" element={<Home />} />
        <Route path="admin/users" element={<UserList />}></Route>
        {/* <Route path="/user/:userId" element={<User />} /> */}
        <Route path="admin/products" element={<ProductList />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
