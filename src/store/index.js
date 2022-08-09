import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import pageReducer from "./pageReducer";
import postReducer from "./postReducer";
import blogReducer from "./blogReducer";
import workReducer from "./workReducer";

const rootReducer = combineReducers({
    pageReducer,
    postReducer,
    blogReducer,
    workReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());