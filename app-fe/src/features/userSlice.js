import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const authUser = createAsyncThunk(
  "user/authUser",
  ({ email, password }, { extra, rejectWithValue }) =>
    extra.API.post("auth/login", {
      email: email,
      password: password,
    })
      .then((response) => response?.data)
      .catch((error) => rejectWithValue(error.response?.data))
);

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  (_, { extra, rejectWithValue }) =>
    extra.API.get("auth/profile")
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data))
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    token: "",
    requestStatus: {
      data: {},
      token: {},
    },
  },
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
    },
    logout: (state) => {
      state.data = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    // authUser
    [authUser.pending]: (state, action) => {
      state.requestStatus.token = action.meta.requestStatus;
    },
    [authUser.fulfilled]: (state, action) => {
      const { token } = action.payload;
      localStorage.setItem("token", token);
      state.token = token;
      state.requestStatus.token = action.meta.requestStatus;
    },
    [authUser.rejected]: (state, action) => {
      localStorage.removeItem("token");
      state.token = "";
      state.requestStatus.token = action.meta.requestStatus;
    },

    // fetchUserProfile
    [fetchUserProfile.pending]: (state, action) => {
      state.requestStatus.data = action.meta.requestStatus;
    },
    [fetchUserProfile.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.requestStatus.data = action.meta.requestStatus;
    },
    [fetchUserProfile.rejected]: (state, action) => {
      state.requestStatus.data = action.meta.requestStatus;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.data;
export const selectToken = (state) => state.user.token;

export default userSlice.reducer;
