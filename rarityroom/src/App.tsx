import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/loginPage/loginPage.tsx";
import RegisterPage from "./pages/registerPage/registerPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
