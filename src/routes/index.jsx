import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const MyRoutes = () => {
  const [user, setUser] = useState([]);

  return (
    <Routes>
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<Dashboard user={user} setUser={setUser} />}
      />
      <Route path="*" element={<Navigate replace to={"/login"} />} />
    </Routes>
  );
};

export default MyRoutes;
