import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

export default createStore(reducers, compose(applyMiddleware(logger, thunk)));
