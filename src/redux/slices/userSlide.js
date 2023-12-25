import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    const response = await axios.get("http://localhost:8080/users/all");
    return response.data;
  }
);

const initialState = {
  listUsers: [],
  isLoading: false,
  isError: false,
};

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAllUsers.pending, (state, action) => {
        // Add user to the state array
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        // Add user to the state array
        state.isLoading = false;
        state.isError = false;
        state.listUsers = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        // Add user to the state array
        state.isLoading = false;
        state.isError = false;
      });
  },
});

export default usersSlice.reducer;
