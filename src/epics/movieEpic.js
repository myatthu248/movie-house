import { ajax } from 'rxjs/ajax';
import {mergeMap,map, catchError, mapTo} from 'rxjs/operators'
import {ofType} from 'redux-observable'
import { 
    GET_MOVIE_LIST,
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_FAIL
 }
     from '../actions/movieActions';
import { of } from 'rxjs';

// epic
export const getMovieListEpic = action$ => action$.pipe(
  ofType(GET_MOVIE_LIST),
  mergeMap(action =>
    ajax.getJSON(`https://api.github.com/users/${action.userName}`).pipe(
      map(response => ({type : GET_MOVIE_LIST_SUCCESS,payload : response})),
      catchError(error=> of({type : GET_MOVIE_LIST_FAIL,error : error}))
    )
  )
);