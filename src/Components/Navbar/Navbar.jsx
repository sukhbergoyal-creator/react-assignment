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
        ☰
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

        <Link to="/posts">
          {t("posts")}
        </Link>

        <Link to="/charts">
          {t("charts")}
        </Link>

        <Link to="/settings">
          {t("settings")}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;