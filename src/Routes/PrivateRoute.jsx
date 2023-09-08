import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const PrivateRoute = ({ children }) => {
  let { loggedIn } = useSelector((store) => store.reducer);
  if (!loggedIn) return <Navigate to="/Login" />;
  return children;
};
