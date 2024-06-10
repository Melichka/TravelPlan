import React, { useState } from "react";
import { LogIn } from "src/components/LogIn";
import { Password } from "src/components/Password";
import { SubmitButton } from "../SubmitButton";
import { useNavigate } from 'react-router-dom';

export const LoginForm: React.FC<{ onSignInSuccess: (token: string) => void }> = ({ onSignInSuccess }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError("Пожалуйста, заполните все поля");
        return;
      }

      // Отправка данных на сервер для входа
      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при входе");
      }

      // Вход выполнен успешно

      const data = await response.json();
      const userToken = data.token; // предполагается, что сервер возвращает токен в свойстве "token"

      onSignInSuccess(userToken);

      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 3000); // Перенаправление через 3 секунды

    } catch (error) {
      setError("Ошибка при входе");
      console.error("Ошибка при входе:", error);
    }
  };

  return (
    <>
      <LogIn setEmail={setEmail} />
      <Password setPassword={setPassword} />
      <SubmitButton onClick={handleLogin} />
      {error && <p>{error}</p>}
      {success && <p style={{ color: 'green' }}>Вход выполнен успешно. Перенаправление на главную страницу...</p>}
    </>
  );
};
