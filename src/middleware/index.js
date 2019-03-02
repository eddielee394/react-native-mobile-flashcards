import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reduxPromise } from "middleware/reduxPromise";

export default applyMiddleware(reduxPromise, thunk, logger);
