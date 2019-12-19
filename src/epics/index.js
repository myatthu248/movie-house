import { combineEpics } from "redux-observable";
import { getMovieListEpic, getTopRatedMovieListEpic } from "./movieEpic";

export const rootEpic = combineEpics(
    getMovieListEpic,
    getTopRatedMovieListEpic
)