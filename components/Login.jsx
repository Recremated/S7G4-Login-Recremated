import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    return regex.test(password);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail && !validateEmail(newEmail)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Geçerli bir email girin",
      }));
    } else {
      setErrors((prevErrors) => {
        const { email, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword && !validatePassword(newPassword)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          "Şifre 8 ila 15 karakter olmalı, bir büyük harf, bir özel karakter ve bir rakam içermeli",
      }));
    } else {
      setErrors((prevErrors) => {
        const { password, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleAcceptedChange = (e) => {
    const isAccepted = e.target.checked;
    setAccepted(isAccepted);
    if (!isAccepted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        accepted: "Şartları kabul etmelisiniz",
      }));
    } else {
      setErrors((prevErrors) => {
        const { accepted, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      navigate("/Success");
    }
  };

  return (
    <div className="container full-screen">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="input-field"
        />
        {email && errors.email && (
          <p className="error-message">{errors.email}</p>
        )}

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
        />
        {password && errors.password && (
          <p className="error-message">{errors.password}</p>
        )}

        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={accepted}
            onChange={handleAcceptedChange}
          />
          <label>Şartları kabul ediyorum</label>
        </div>
        {(email || password) && !accepted && (
          <p className="error-message">Şartları kabul etmelisiniz</p>
        )}

        <button
          type="submit"
          className="submit-button"
          disabled={
            !validateEmail(email) || !validatePassword(password) || !accepted
          }
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;
