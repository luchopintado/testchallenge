import {
    FETCH_FIELDS_START,
    FETCH_FIELDS_SUCCESS,
    FETCH_FIELDS_ERROR
} from "./types";

export const fetchFieldsStart = () => ({
    type: FETCH_FIELDS_START,
    error: false,
});
export const fetchFieldsSuccess = payload => ({
    type: FETCH_FIELDS_SUCCESS,
    payload,
});
export const fetchFieldsError = payload => ({
    type: FETCH_FIELDS_ERROR,
    payload,
    error: true
});
export const fetchFields = () =>
    async (dispatch, getState, services) => {
        dispatch(fetchFieldsStart());
        try {
            const { data } = await services.axios.get('/fields');
            dispatch(fetchFieldsSuccess(data));
        } catch (e) {
            dispatch(fetchFieldsError(e));
        }
    }