import { combineReducers } from "redux";
import movieReducer from "./movieReducers";

const rootReducer = combineReducers({
    movieState: movieReducer,
})
export default rootReducer;