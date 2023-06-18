import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const Login = React.lazy(() => import("./Login"));
const AdminDashboard = React.lazy(() => import("./Dashboard/AdminDashboard"));
const AddPatient = React.lazy(() => import("./Forms/AddPatient"));

export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/addpatient" element={<AddPatient />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
