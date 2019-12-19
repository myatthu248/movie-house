import { ajax } from 'rxjs/ajax';
import {mergeMap,map, catchError, mapTo} from 'rxjs/operators'
import {ofType} from 'redux-observable'
import { 
    GET_MOVIE_LIST,
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_FAIL,
    GET_TOP_RATED_MOVIE_LIST,
    GET_TOP_RATED_MOVIE_LIST_SUCCESS,
    GET_TOP_RATED_MOVIE_LIST_FAIL
 }
     from '../actions/movieActions';
import { of } from 'rxjs';

// epic
export const getMovieListEpic = action$ => action$.pipe(
  ofType(GET_MOVIE_LIST),
  mergeMap(action =>
    ajax.getJSON(`https://api.themoviedb.org/3/movie/upcoming?api_key=829e1e1d6359684ff2da0ff2c19b37cc&language=en-US&page=1`).pipe(
      map(response => ({type : GET_MOVIE_LIST_SUCCESS,payload : response})),
      catchError(error=> of({type : GET_MOVIE_LIST_FAIL,error : error}))
    )
  )
);

// epic
export const getTopRatedMovieListEpic = action$ => action$.pipe(
  ofType(GET_TOP_RATED_MOVIE_LIST),
  mergeMap(action =>
    ajax.getJSON(`https://api.themoviedb.org/3/movie/top_rated?api_key=829e1e1d6359684ff2da0ff2c19b37cc&language=en-US&page=1`).pipe(
      map(response => ({ type: GET_TOP_RATED_MOVIE_LIST_SUCCESS, payload: response })),
      catchError(error => of({ type: GET_TOP_RATED_MOVIE_LIST_FAIL, error: error }))
    )
  )
);