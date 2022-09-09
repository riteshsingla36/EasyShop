import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />}></Route>
        {/* <Route path="/user/:userId" element={<User />} /> */}
      </Routes>
    </div>
  );
}

export default App;
