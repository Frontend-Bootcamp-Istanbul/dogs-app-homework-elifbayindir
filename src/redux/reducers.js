import {ADD_FAVORITE, DELETE_FAVORITE} from './types';

export const dogReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, 
                action.payload
            ];
        case DELETE_FAVORITE:
            return state.filter((dog) => dog.id !== action.payload)
        default:
            return state;
    }
};

