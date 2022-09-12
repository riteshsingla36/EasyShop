import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import ProductList from "./pages/products/ProductList";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="admin/" element={<Home />} />
        <Route path="admin/users" element={<UserList />}></Route>
        {/* <Route path="/user/:userId" element={<User />} /> */}
        <Route path="admin/products" element={<ProductList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
