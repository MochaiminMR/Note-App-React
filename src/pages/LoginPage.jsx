import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api2";
import { useNavigate } from "react-router-dom";
import { LocaleContext } from "../contexts/LocaleContext";


function LoginPage({ loginSuccess }) {
const { locale, toggleLocale } = useContext(LocaleContext);
  const navigate = useNavigate();
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
      navigate("/");
    }
  }

  return (
    <section className="login-page">
      <h2>
        {locale === "id"
          ? "Silahkan Masuk Untuk Melanjutkan"
          : "Login to use app, please."}
      </h2>

      <LoginInput login={onLogin} />
      <p>
        Belum punya akun? <Link to="/register">Daftar di sini.</Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
