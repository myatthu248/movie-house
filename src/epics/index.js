import { combineEpics } from "redux-observable";
import { getMovieListEpic } from "./movieEpic";

export const rootEpic = combineEpics(
    getMovieListEpic
)