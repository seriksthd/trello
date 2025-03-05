import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstance";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/todos");
      console.log('response: ', response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (newTodo, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/todos", newTodo);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/todos/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, title }, { _, rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`/todos/${id}`, { title });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTrelloItemAsync = createAsyncThunk(
  "todos/addTrelloItem",
  async ({ id, trelloItem }, { rejectWithValue }) => {
    try {
      const { data: existingTodo } = await axiosInstance.get(`/todos/${id}`);
      const updatedTrello = existingTodo.trello
        ? [...existingTodo.trello, { title: trelloItem, id: Date.now() }]
        : [trelloItem];
      const response = await axiosInstance.patch(`/todos/${id}`, {
        trello: updatedTrello,
      });
      console.log("response: ", response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const postCart = createAsyncThunk(
  "todos/postCart",
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("todos/", product);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add to cart");
    }
  }
);
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    isLoading: false,
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
        state.cart.push(action.payload);
      })
      .addCase(postCart.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(postCart.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const todoReducer = todoSlice.reducer;
