import { Routes, Route } from "react-router-dom";
import { APP_PAGES } from "../AppView";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import PublicRoute from "./Authentication/PublicRoutes";

const RouterConfig = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <APP_PAGES.LOGIN />
          </PublicRoute>
        }
      />
      <Route
        path="/home"
        element={
          <PublicRoute>
            <APP_PAGES.HOME />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <APP_PAGES.DASHBOARD />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student"
        element={
          <ProtectedRoute>
            <APP_PAGES.STUDENT />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <APP_PAGES.PROFILE />
          </ProtectedRoute>
        }
      />
      {/* Nested Route */}
      {/* <Route path="/" element={<PublicRoute />}>
        <Route path="dashboard" element={<APP_PAGES.DASHBOARD />} />
        <Route path="student" element={<APP_PAGES.STUDENT />} />
        <Route path="profile" element={<APP_PAGES.PROFILE />} />
      </Route> */}

      {/* <Route path="/" element={<APP_PAGES.HOME />} /> */}
      {/* <Route path="/login" element={<APP_PAGES.LOGIN />} /> */}
    </Routes>
  );
};
export default RouterConfig;
