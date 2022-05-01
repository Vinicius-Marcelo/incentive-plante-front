import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import UserNotLogged from "./pages/UserNotLogged";

export default function ProjectRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
