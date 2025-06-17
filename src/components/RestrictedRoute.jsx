import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" /> : children;
}
