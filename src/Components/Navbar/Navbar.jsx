import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";



function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <button
        className="menu-btn"
        onClick={() =>
          setIsMenuOpen(!isMenuOpen)
        }
      >
        &#9776;
      </button>

      <div
        className={
          isMenuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >
        <Link to="/home">
          {t("home")}
        </Link>

        <Link to="/users">
          {t("users")}
        </Link>

        <Link to="/charts">
          {t("charts")}
        </Link>

        <Link to="/settings">
          {t("settings")}
        </Link>

        <Link to="/logout">
          {t("Logout")}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;