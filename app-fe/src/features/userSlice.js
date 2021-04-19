import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const authUser = createAsyncThunk(
  "user/authUser",
  ({ email, password }, { extra, rejectWithValue }) =>
    extra.API.post("auth/login", {
      email: email,
      password: password,
    })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data))
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    data: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    // authUser
    [authUser.pending]: (state, action) => {
      // state.entities.push(action.payload)
    },
    [authUser.fulfilled]: (state, action) => {
      // state.entities.push(action.payload)
      state.data = action.payload;
    },
    [authUser.rejected]: (state, action) => {
      // state.entities.push(action.payload)
    },
  },
});

export const { login, logout } = userSlice.actions;

export const getUser = (state) => state.user.data;

export default userSlice.reducer;
