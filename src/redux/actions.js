import {ADD_FAVORITE, DELETE_FAVORITE} from './types';

export const addFavorite = (id) => {
    return {
        type: ADD_FAVORITE,
        payload: id
    }
};
export const deleteFavorite = (id) => {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
};