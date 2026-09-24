import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login/login.tsx";
import RegisterPage from "./pages/register/register.tsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default AppRoutes;
