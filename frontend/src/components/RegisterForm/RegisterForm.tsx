import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "../LogIn/LogIn";
import { Password } from "../Password";
import { SubmitButton } from "../SubmitButton";

export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");
  const [error, setError] = useState("");
  const [showMessage, setShowMessage] = useState(false); // Состояние для отображения сообщения о успешной регистрации
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      if (!email || !password || !confirmPassword) {
        setError("Пожалуйста, заполните все поля");
        return;
      }

      if (password !== confirmPassword) {
        setError("Пароли не совпадают");
        return;
      }

      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          checkpassword: confirmPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при регистрации");
      }

      setRegistrationStatus("Пользователь успешно зарегистрирован!");
      setShowMessage(true); // Устанавливаем состояние для отображения сообщения

      setTimeout(() => {
        setShowMessage(false); // Скрываем сообщение после некоторого времени
        navigate("/"); // Перенаправляем пользователя на главную страницу
      }, 3000); // Например, через 3 секунды

    } catch (error) {
      setError("Ошибка при регистрации");
      console.error("Ошибка при регистрации:", error);
    }
  };

  return (
    <>
      <LogIn setEmail={setEmail} />
      <Password setPassword={setPassword} />
      <Password setPassword={setConfirmPassword} />
      <SubmitButton onClick={handleRegister} />
      {showMessage && <p>{registrationStatus}</p>} {/* Отображаем сообщение, если showMessage === true */}
      {error && <p>{error}</p>}
    </>
  );
};
