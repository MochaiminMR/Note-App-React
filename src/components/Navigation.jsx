import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";
import { SiGoogletranslate } from "react-icons/si";

import { LocaleContext, ThemeContext } from "../contexts/LocaleContext";

import PropTypes from "prop-types";

function Navigation({ logout, name }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/notes/archived">
            {locale == "id" ? "Terarsip" : "Archived"}
          </Link>
        </li>
  
          <li>
            <button className="toggle-locale" onClick={toggleLocale}>
              {locale === "id" ? <SiGoogletranslate /> : <SiGoogletranslate />}
            </button>
          </li>
          <li>
            <button className="toggle-theme" onClick={toggleTheme}>
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </li>
      

        <li>
          <button className="button-logout" onClick={logout}>
            <h5> {name} </h5> <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
