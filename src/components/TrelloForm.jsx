import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
import { addTodo } from "../store/thunks/trelloThunks";

export default function TrelloForm() {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  const [isAddTrello, setIsAddTrello] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [todoValue]);
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: todoValue,
      id: Date.now(),
      trello: [],
    };
    if (todoValue.trim() === "") {
      toast.error("заполните!!!");
    } else {
      dispatch(addTodo(newTodo));
    }
    toast.success("успешно создан !");
    setTodoValue("");
  };

  const changeHandler = (e) => {
    setTodoValue(e.target.value);
  };
  const handleIsAddOpen = () => {
    setIsAddTrello(true);
    setTodoValue("");
    setTimeout(() => {
      const textarea = document.querySelector(
        '[data-testid="list-name-textarea"]'
      );

      if (textarea) {
        textarea.focus();
      }
    }, 100);
  };
  const handleIsAddClosse = () => {
    setIsAddTrello(false);
  };
  return (
    <div>
      {isAddTrello ? (
        <StyledForm onSubmit={submitHandler}>
          <Textarea
            style={{ resize: "none" }}
            value={todoValue}
            onChange={changeHandler}
            ref={inputRef}
            spellCheck="false"
            dir="auto"
            data-testid="list-name-textarea"
            maxLength="512"
            autoComplete="off"
            name="Введите имя колонки…"
            placeholder="Введите имя колонки…"
          ></Textarea>
          <div
            style={{ display: "flex", alignItems: "center", fontSize: "25px" }}
          >
            <StyledBtnAdd>
              <StyledButton type="submit">Добавить список</StyledButton>
            </StyledBtnAdd>
            <RxCross2 onClick={handleIsAddClosse} />
          </div>
        </StyledForm>
      ) : (
        <StyledBtnAddOpen onClick={handleIsAddOpen}>
          Добавить список
        </StyledBtnAddOpen>
      )}
      <ToastContainer />
    </div>
  );
}
export const StyledBtnAddOpen = styled.button`
  width: 272px;
  padding: 12px;
  border-radius: 12px;
  background-color: #ffffff3d;
  border: none;
  font-size: 20px;
`;
export const Textarea = styled.textarea`
  font-size: 14px;
  font-weight: 400;
  padding: 12px 12px;
  border-radius: 3px;
  background-color: #22272b;
  box-shadow: inset 0 0 0 1px #738496;
  width: 100%;
  height: 28px;
  margin: 0;
  padding: 4px 12px;
  overflow-y: hidden;
  border: none;
  border-radius: 4px;
  color: #172b4d, #172b4d;
  font-weight: 600;
  resize: none;
`;
export const StyledBtnAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 8px;
  border-radius: 4px;
  gap: 4px;
`;
const StyledForm = styled.form`
  box-sizing: border-box;
  width: 272px;
  padding: 8px;
  border-radius: 12px;
  background-color: #101204;
  box-shadow: var(
    --ds-shadow-raised,
    0px 1px 1px #091e4240,
    0px 0px 1px #091e424f
  );
`;

export const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
