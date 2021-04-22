import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { thunkStatus } from "constants/status";

export const fetchMessagesByChannel = createAsyncThunk(
  "messages/fetchMessagesByChannel",
  ({ channelUUID }, { extra, rejectWithValue }) =>
    extra.API.get("messages")
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data))
);

export const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    requestStatus: {
      messages: thunkStatus.DEFAULT,
    },
  },
  reducers: {
    pushNewMessage: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
  },
  extraReducers: {
    // fetchTextChannels
    [fetchMessagesByChannel.pending]: (state, action) => {
      state.requestStatus.messages = action.meta.requestStatus;
    },
    [fetchMessagesByChannel.fulfilled]: (state, action) => {
      state.messages = action.payload;
      state.requestStatus.messages = action.meta.requestStatus;
    },
    [fetchMessagesByChannel.rejected]: (state, action) => {
      state.requestStatus.messages = action.meta.requestStatus;
    },
  },
});

export const { addNewMessageToMessages } = messagesSlice.actions;

export const selectMessages = (state) => state.messages.messages;

export default messagesSlice.reducer;
