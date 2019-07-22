import {
    FETCH_FIELDS_START,
    FETCH_FIELDS_SUCCESS,
    FETCH_FIELDS_ERROR
} from '../actions/types';

const initialState = {
    loading: false,
    data: [],
    error: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FIELDS_START: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case FETCH_FIELDS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        }
        case FETCH_FIELDS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;
    }
}
