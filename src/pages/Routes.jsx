import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const AdminLogin = React.lazy(() => import("./AdminLogin"));
const StaffLogin = React.lazy(() => import("./StaffLogin"));
const AdminDashboard = React.lazy(() => import("./Dashboard/AdminDashboard"));
const StaffDashboard = React.lazy(() => import("./Dashboard/StaffDashboard"));


export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/stafflogin" element={<StaffLogin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/staffdashboard" element={<StaffDashboard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
