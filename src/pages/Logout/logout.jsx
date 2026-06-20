import { AuthContext } from "../../context/AuthContext";
import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout } =
    useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  }, []);

  return <p>Logging out...</p>;
}
export default Logout