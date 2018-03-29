import { createStore, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import rootReducer from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

const defaultState = {
    posts,
    comments
}

const store = createStore(rootReducer, defaultState);

const history = syncHistoryWithStore(browserHistory, store);

export default store;