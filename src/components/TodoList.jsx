import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../store/todoSlice";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export default function TodoList() {
  const { todos } = useSelector((state) => state.todos);
  console.log("todos: ", todos);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      setTimeout(() => {
        dispatch(fetchTodos());
      },1000);
    };
  }, [dispatch]);

  return (
    <StyledList>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} item={item} />
      ))}
    </StyledList>
  );
}
