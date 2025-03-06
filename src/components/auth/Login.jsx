import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { signInRequest } from "../../store/thunks/authThunks";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (userData) => {
    dispatch(signInRequest({ userData, navigate }));
  };

  return (
    <RegisterContainer>
      <Section>
        <AnimatedH1>Login</AnimatedH1>
        <AnimatedForm onSubmit={handleSubmit(submitHandler)}>
          <AnimatedInput
            type="text"
            {...register("email", {
              required: {
                value: true,
                message: "заполните email",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "не правильно введен email",
              },
            })}
            placeholder="введите email"
          />
          <ErrorSpan>{errors?.email?.message}</ErrorSpan>
          <AnimatedInput
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "заполните password",
              },
              minLength: {
                value: 6,
                message: "пароль должен быть больше 6 символов",
              },
            })}
            placeholder="введите  password"
          />
          <ErrorSpan>{errors?.password?.message}</ErrorSpan>
          <AnimatedButton type="submit">login</AnimatedButton>

          <p>
            У вас нет аккаунт ?<Link to={"/register"}> Зарегистрироваться</Link>
          </p>
        </AnimatedForm>
      </Section>
    </RegisterContainer>
  );
};

export const neonGlow = keyframes`
  0% {
    box-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 15px #0ff, 0 0 20px #0ff, 0 0 205px #0ff, 0 0 100px #0ff;
  }
  50% {
    box-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 12px #0ff, 0 0 17px #0ff, 0 0 22px #0ff, 0 0 50px #0ff;
  }
  100% {
    box-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 15px #0ff, 0 0 20px #0ff, 0 0 205px #0ff, 0 0 100px #0ff;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #1e1e1e, #000);
  overflow: hidden;
`;

export const Section = styled.section`
  width: 600px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  border: 2px solid #0ff;
  gap: 40px;
  padding: 40px;
  animation: ${fadeIn} 1s ease-out;
`;

export const AnimatedH1 = styled.h1`
  text-align: center;
  color: #0ff;
  text-shadow: 0 0 5px #0ff, 0 0 10px #0ff;
  font-size: 2.5em;
  animation: ${neonGlow} 2s infinite alternate;
  border-radius: 12px;
`;

export const AnimatedForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: auto;

  & > p {
    color: #ddd;
    text-align: center;

    & > a {
      color: #0ff;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #fff;
      }
    }
  }
`;

export const AnimatedInput = styled.input`
  width: 100%;
  height: 55px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  padding: 12px;
  background-color: #222;
  color: #eee;
  border: 1px solid #444;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0ff;
    box-shadow: 0 0 5px #0ff;
  }

  &::placeholder {
    color: #888;
  }
`;

export const AnimatedButton = styled.button`
  width: 100%;
  height: 55px;
  border-radius: 8px;
  background-color: #00cc00;
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #009900;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ErrorSpan = styled.span`
  color: #ff4d4d;
  font-size: 0.9em;
  margin-top: -5px;
`;
