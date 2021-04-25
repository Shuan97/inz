import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import userReducer from "features/userSlice";
import channelsReducer from "features/channelsSlice";
import messagesReducer from "features/messagesSlice";
import API from "utils/API";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";

/**
 * Create custom thunk middleware and pass axios API instance
 */
const thunk = ReduxThunk.withExtraArgument({ API });

const immutableStateInvariant = immutableStateInvariantMiddleware();

/**
 * Create custom logger with new colors
 *
 * Learn more - https://misc.flogisoft.com/bash/tip_colors_and_formatting
 */
const logger = createLogger({
  collapsed: true,
  colors: {
    title: (action) => {
      if (!action) {
        console.warn("Action not defined - [dispatch] has missing action");
        return null;
      }
      const { type } = action;
      if (type.indexOf("pending") > -1) return "#FFAA32";
      if (type.indexOf("fulfilled") > -1) return "#00ee32";
      if (type.indexOf("rejected") > -1) return "#ff3232";
      if (type.indexOf("update") > -1) return "#11bcff";
      console.log(
        `%c[Logger]%c Action type %c[${type}] %cnot recognized in custom logger.`,
        "color: #00eeff",
        "color: #bbc900",
        "color: #22aa00",
        "color: #bbc900"
      );
      // console.log(
      //   `\x1b[36m[Logger]\x1b[39m Action type \x1b[33m[${type}]\x1b[39m not recognized in custom logger.`
      // );
      return "#22bbff";
    },
  },
});

/**
 * Combine reducers used in store
 */
const reducer = combineReducers({
  user: userReducer,
  channels: channelsReducer,
  messages: messagesReducer,
});

const middleware = [];

if (process.env.NODE_ENV !== "production") {
  middleware.push(immutableStateInvariant, thunk, logger);
} else {
  middleware.push(thunk, logger);
}

/**
 * Configure store, pass reducer object and middleware array
 */
const store = configureStore({
  reducer: reducer,
  middleware: middleware,
});

export default store;
