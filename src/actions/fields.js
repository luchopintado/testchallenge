import {
    FETCH_FIELDS_START,
    FETCH_FIELDS_SUCCESS,
    FETCH_FIELDS_ERROR,
    UPDATE_FIELD_START,
    UPDATE_FIELD_SUCCESS,
    UPDATE_FIELD_ERROR
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

export const updateFieldStart = () => ({
    type: UPDATE_FIELD_START,
    error: false,
});
export const updateFieldSuccess = payload => ({
    type: UPDATE_FIELD_SUCCESS,
    payload,
});
export const updateFieldError = payload => ({
    type: UPDATE_FIELD_ERROR,
    payload,
    error: true
});
export const updateField = (id, field) =>
    async (dispatch, getState, services) => {
        dispatch(updateFieldStart());
        try {
            const { data } = await services.axios.patch(`/fields/${id}`, field);
            dispatch(updateFieldSuccess(data));
        } catch (e) {
            dispatch(updateFieldError(e));
        }
    }