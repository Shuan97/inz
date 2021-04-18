import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import userReducer from "../features/userSlice";
import appReducer from "../features/appSlice";
import API from "../utils/API";

const thunk = ReduxThunk.withExtraArgument({ API });
const logger = createLogger({
  collapsed: true,
  colors: {
    title: ({ type }) => {
      if (type.indexOf("pending") > -1) return "#FFAA32";
      if (type.indexOf("fulfilled") > -1) return "#00ee32";
      if (type.indexOf("rejected") > -1) return "#ff3232";
      if (type.indexOf("update") > -1) return "#11bcff";
      // https://misc.flogisoft.com/bash/tip_colors_and_formatting
      console.log(
        `\x1b[36m[Logger]\x1b[39m Action type \x1b[33m[${type}]\x1b[39m not recognized in custom logger.`
      );
    },
  },
});

const reducer = combineReducers({
  user: userReducer,
  app: appReducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: [thunk, logger],
});

export default store;
