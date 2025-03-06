import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../store/todoSlice";
import styled from "styled-components";
import TrelloItem from "./TrelloItem";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export default function TrelloList() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(fetchTodos());
    };
  }, [dispatch]);

  return (
    <StyledList>
      {todos.map((item) => (
        <TrelloItem key={item.id} {...item} item={item}/>
      ))}
    </StyledList>
  );
}
