import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { thunkStatus } from "constants/status";

export const fetchMessagesByChannel = createAsyncThunk(
  "messages/fetchMessagesByChannel",
  (_, { extra, rejectWithValue, getState }) => {
    const { channels } = getState();
    return extra.API.get(`channels/${channels.channelUUID}/messages`)
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data));
  }
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
      console.log("Push to array");
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

export const { pushNewMessage } = messagesSlice.actions;

export const selectMessages = (state) => state.messages.messages;

export default messagesSlice.reducer;
