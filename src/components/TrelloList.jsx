import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import TrelloItem from "./TrelloItem";
import { fetchTodos } from "../store/thunks/trelloThunks";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export default function TrelloList() {
  const { trello } = useSelector((state) => state.trello);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(fetchTodos());
    };
  }, [dispatch]);

  return (
    <StyledList>
      {trello.map((item) => (
        <TrelloItem key={item.id} {...item} item={item} />
      ))}
    </StyledList>
  );
}
