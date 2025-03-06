import { createSlice } from "@reduxjs/toolkit";
import {
  addTodo,
  addTrelloItemAsync,
  deleteTodo,
  fetchTodos,
  postCart,
} from "../thunks/trelloThunks";

const TrelloSlice = createSlice({
  name: "trello",
  initialState: {
    todos: [],
    isLoading: false,
    profileImage: localStorage.getItem("profileImage") || null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos.push(action.payload);
      })
      .addCase(addTodo.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(addTodo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addTrelloItemAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTrelloItemAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const { id, trello } = action.payload;

        const todoToUpdate = state.todos.find((todo) => todo.id === id);
        if (todoToUpdate) {
          todoToUpdate.trello = trello;
        }
      })
      .addCase(postCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = [{ ...action.payload }];
      })
      .addCase(postCart.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(postCart.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const trelloReducer = TrelloSlice.reducer;
