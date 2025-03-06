import React from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUpRequest } from "../../store/thunks/authThunks";
import { AnimatedButton, AnimatedForm, AnimatedH1, AnimatedInput, ErrorSpan, RegisterContainer, Section } from "./Login";

export const Register = () => {
  const dispatch = useDispatch();
  const { registrationStatus } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const handleSubmitHandler = async (userData) => {
    if (userData.email === "admin@gmail.com") {
      userData.role = "ADMIN";
    } else {
      userData.role = "USER";
    }
    console.log(userData);

    dispatch(signUpRequest({ userData, navigate }));
  };

  return (
    <RegisterContainer>
      <Section>
        <AnimatedH1>Registration</AnimatedH1>
        {registrationStatus && <p>{registrationStatus}</p>}
        <AnimatedForm onSubmit={handleSubmit(handleSubmitHandler)}>
          <AnimatedInput
            type="text"
            placeholder="first name"
            {...register("firstName", { required: "заполните фамилия" })}
          />
          <ErrorSpan>{errors?.firstName?.message}</ErrorSpan>
          <AnimatedInput
            {...register("lastName", { required: "заполните имя" })}
            type="text"
            placeholder="last name"
          />
          <ErrorSpan>{errors?.lastName?.message}</ErrorSpan>

          <AnimatedInput
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
            type="text"
            placeholder="email"
          />
          <ErrorSpan>{errors?.email?.message}</ErrorSpan>

          <AnimatedInput
            {...register("password", {
              required: {
                value: true,
                message: "заполните password",
              },
              minLength: {
                value: 6,
                message: "пароль должен быть больше 6 символов",
              },
              maxLength: {
                value: 14,
                message: "слишком длинный пароль вы можете забыть(",
              },
            })}
            type="text"
            placeholder="password"
          />
          <ErrorSpan>{errors?.password?.message}</ErrorSpan>
          <AnimatedButton type="submit">register</AnimatedButton>
          <p>
            Вы уже зарегистрированы ? <Link to={"/login"}> войти</Link>
          </p>
        </AnimatedForm>
      </Section>
    </RegisterContainer>
  );
};

