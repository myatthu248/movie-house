import {
    GET_MOVIE_LIST,
    GET_MOVIE_LIST_SUCCESS,
    GET_MOVIE_LIST_FAIL,
    GET_TOP_RATED_MOVIE_LIST,
    GET_TOP_RATED_MOVIE_LIST_SUCCESS,
    GET_TOP_RATED_MOVIE_LIST_FAIL
} from "../actions/movieActions";

const initState = {
    isLoading: false,
    movieList: null,
    topRatedMovieList: null,
    error: null
}

const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_MOVIE_LIST:
            return {
                ...state,
                isLoading: true
            }
        case GET_MOVIE_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movieList: action.payload
            }
        case GET_MOVIE_LIST_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false,
                movieList: action.payload
            }
        case GET_TOP_RATED_MOVIE_LIST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TOP_RATED_MOVIE_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                topRatedMovieList: action.payload
            }
        case GET_TOP_RATED_MOVIE_LIST_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false,
                topRatedMovieList: action.payload
            }
        default:
            return state
    }
}

export default movieReducer;