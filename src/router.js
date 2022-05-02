import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import UserLogged from "./pages/UserLogged"

export default function ProjectRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/my-environment" element={<Dashboard />} />
      <Route path="/usuario" element={<UserLogged />} />
    </Routes>
  );
}
