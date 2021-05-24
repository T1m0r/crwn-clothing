import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// this way we can add more middlewares in the future.
// logger is one middleware
const middlewares = [];

// Only use the logger in the development mode
if (proccess.env.NODE_ENV == "development") {
	middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
