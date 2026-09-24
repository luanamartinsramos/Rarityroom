import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isLogged = localStorage.getItem("isLogged");

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
