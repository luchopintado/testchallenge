import {
    FETCH_REQUESTS_START,
    FETCH_REQUESTS_SUCCESS,
    FETCH_REQUESTS_ERROR
} from '../actions/types';

const initialState = {
    loading: false,
    data: [],
    error: null,
};

export default function reducer(state = initialState, action) {
    console.log('action: ', action)
    switch (action.type) {
        case FETCH_REQUESTS_START: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case FETCH_REQUESTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        }
        case FETCH_REQUESTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        default:
            return state;
    }
}
