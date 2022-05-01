import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import UserLogged from "./pages/UserLogged";
import UserNotLogged from "./pages/UserNotLogged";

export default function ProjectRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/usuario" element={<UserLogged />} />
    </Routes>
  );
}
