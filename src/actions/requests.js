import {
    FETCH_REQUESTS_START,
    FETCH_REQUESTS_SUCCESS,
    FETCH_REQUESTS_ERROR
} from "./types";

export const fetchRequestsStart = () => ({
    type: FETCH_REQUESTS_START,
    error: false,
});
export const fetchRequestsSuccess = payload => ({
    type: FETCH_REQUESTS_SUCCESS,
    payload,
});
export const fetchRequestsError = payload => ({
    type: FETCH_REQUESTS_ERROR,
    payload,
    error: true
});
export const fetchRequests = () =>
    async (dispatch, getState, services) => {
        dispatch(fetchRequestsStart());
        try {
            const { data } = await services.axios.get('/requests');
            dispatch(fetchRequestsSuccess(data));
        } catch (e) {
            dispatch(fetchRequestsError(e));
        }
    }