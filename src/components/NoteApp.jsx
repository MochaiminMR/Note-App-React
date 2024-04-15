import React from "react";
import { Link, Route, Routes} from "react-router-dom";
import Navigation from "./Navigation";

import AddPage from "../pages/AddPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import DetailPage from "../pages/DetailPage";
import { getUserLogged, putAccessToken } from "../utils/api2";

import HomePage from "../pages/HomePage";
import { useState } from "react";
import { useEffect } from "react";

import { LocaleContext, ThemeContext } from "../contexts/LocaleContext";
import ArchivePage from "../pages/ArchivePage";
import { SiGoogletranslate } from "react-icons/si";
import { FaMoon, FaSun } from "react-icons/fa6";

export const NoteApp = () => {
  const [authedUser, setauthedUser] = useState([]);
  const [initialling, setInitialling] = useState(true);
  const [locale, setLocale] = useState("id");

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const contextValueTheme = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLangugae = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("language", newLangugae);
      return newLangugae;
    });
  };

  const contextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  useEffect(() => {
    async function getData() {
      await getUserLogged().then(({ data }) => {
        setauthedUser(data);
        setInitialling(false);
        setLocale(localStorage.getItem("language") || "id");
        setTheme(localStorage.getItem("theme") || "light");
      });
    }

    document.documentElement.setAttribute("data-theme", theme);
    getData();
  }, [theme]);

  async function oHandleLogout() {
    putAccessToken("");
    setauthedUser(null);
  }

  async function onHandleLoginSucces({ accessToken }) {
    putAccessToken(accessToken);
    await getUserLogged().then(({ data }) => setauthedUser(data));
  }

  return (
    <>
      <div className="app-container">
        {initialling == true ? (
          <div>Loading...</div>
        ) : authedUser ? (
          <ThemeContext.Provider value={contextValueTheme}>
            <LocaleContext.Provider value={contextValue}>
              <header>
                <h1 className="">
                  <Link to={"/"}>
                    {locale === "id" ? "Aplikasi Note" : "Note Apps"}
                  </Link>
                </h1>
                <Navigation name={authedUser.name} logout={oHandleLogout} />
              </header>
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/add" element={<AddPage />} />
                  <Route path="/notes/:id" element={<DetailPage />} />
                  <Route path="/notes/archived" element={<ArchivePage />} />
                </Routes>
              </main>
            </LocaleContext.Provider>
          </ThemeContext.Provider>
        ) : (
          <ThemeContext.Provider value={contextValueTheme}>
            <LocaleContext.Provider value={contextValue}>
              <div>
                <header>
                  <h1>{locale === "id" ? "Aplikasi Note" : "Note Apps"}</h1>
                  <nav className="navigation">
                    <ul>
                      <li>
                        <button
                          className="toggle-locale"
                          onClick={toggleLocale}>
                          {locale === "id" ? (
                            <SiGoogletranslate />
                          ) : (
                            <SiGoogletranslate />
                          )}
                        </button>
                      </li>
                      <li>
                        <button className="toggle-theme" onClick={toggleTheme}>
                          {theme === "light" ? <FaMoon /> : <FaSun />}
                        </button>
                      </li>
                    </ul>
                  </nav>
                </header>
                <main>
                  <Routes>
                    <Route
                      path="/*"
                      element={<LoginPage loginSuccess={onHandleLoginSucces} />}
                    />
                    <Route path="/register" element={<RegisterPage />} />
                  </Routes>
                </main>
              </div>
            </LocaleContext.Provider>
          </ThemeContext.Provider>
        )}
      </div>
    </>
  );
};
