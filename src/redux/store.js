import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

export const store = compose(applyMiddleware(...middlewares))(createStore)(
  rootReducer
);

export const persistor = persistStore(store);
