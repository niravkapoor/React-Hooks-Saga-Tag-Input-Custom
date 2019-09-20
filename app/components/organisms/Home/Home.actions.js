import { GET_MOVIE_NAME, SAVE_MOVIE_LIST } from './Home.constant';

export const getMovieName = options => ({
    type: GET_MOVIE_NAME,
    options
})

export const saveMovieList = options => ({
    type: SAVE_MOVIE_LIST,
    options
})