import { Link } from "react-router-dom";
// import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api2";
import { useNavigate } from "react-router-dom";
import RegisterInput2 from "../components/RegisterInput2";
import { LocaleContext } from "../contexts/LocaleContext";
import { useContext } from "react";
function RegisterPage() {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const {error} = await register(user);

    if (!error) {
      // Redirect to the home page
      navigate('/login')
    }
  }

  return (
    <section className="register-page">
      <h2>
        {locale === "id"
          ? "Silahkan Daftar Untuk Melanjutkan"
          : "Register to use app, please."}
      </h2>
      <RegisterInput2 register={onRegisterHandler} />
      <p>
        Kembali ke <Link to="/">Masuk</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
