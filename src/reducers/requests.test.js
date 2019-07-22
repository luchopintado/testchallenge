import reducer from "./requests";
import { FETCH_REQUESTS_SUCCESS, FETCH_REQUESTS_ERROR } from "../actions/types";

describe('Reducer: requests', () => {
    it('fetching requests successfully', () => {
        const resultado = reducer({}, {
            type: FETCH_REQUESTS_SUCCESS,
            payload: [1, 2]
        });

        expect(resultado).toEqual({
            data: [1, 2],
            loading: false,
        });
    });

    it('fetching requests with fail', () => {
        const resultado = reducer({}, {
            type: FETCH_REQUESTS_ERROR,
            payload: "error"
        });

        expect(resultado).toEqual({
            error: "error",
            loading: false,
        });
    });
});