import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import { toast } from "react-toastify";

export const fetchTodos = createAsyncThunk(
  "trello/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/trello");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "trello/addTodo",
  async (newTodo, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/trello", newTodo);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "trello/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/trello/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "trello/updateTodo",
  async ({ id, title }, { _, rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.patch(`/trello/${id}`, { title });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTrelloItemAsync = createAsyncThunk(
  "trello/addTrelloItem",
  async ({ id, trelloItem }, { rejectWithValue }) => {
    try {
      const { data: existingTodo } = await axiosInstance.get(`/trello/${id}`);
      const updatedTrello = existingTodo.trello
        ? [...existingTodo.trello, { title: trelloItem, id: Date.now() }]
        : [trelloItem];
      const { data } = await axiosInstance.patch(`/trello/${id}`, {
        trello: updatedTrello,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const postCart = createAsyncThunk(
  "trello/postCart",
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("trello/", product);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add to cart");
    }
  }
);
