import { Route, Routes } from "react-router-dom";
import { Signup } from "../Components/Signup";
import { Login } from "../Components/Login";
import { Dashboard } from "../Components/Dashboard";
import { PrivateRoute } from "./PrivateRoute";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
