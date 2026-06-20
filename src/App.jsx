import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import Charts from "./pages/Charts/Charts";
import Settings from "./pages/Settings/Settings";
import NotFound from "./pages/NotFound/NotFound";
import Logout from "./pages/Logout/logout";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
// import EditUser from "./pages/EditUser/EditUser";

import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>}>
        <Route path="/home" element={<Home />} />

        <Route path="/users" element={<Users />} />

        <Route path="/users/:id" element={<UserDetails />} />

        <Route path="/charts" element={<Charts />} />

        <Route path="/settings" element={<Settings />} />
        
        <Route path="/logout" element={<Logout />} />

      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
