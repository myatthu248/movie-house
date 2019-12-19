import { combineEpics } from "redux-observable";
import { getMovieListEpic, getTopRatedMovieListEpic, getTrendingMovieListEpic } from "./movieEpic";

export const rootEpic = combineEpics(
    getMovieListEpic,
    getTopRatedMovieListEpic,
    getTrendingMovieListEpic
)