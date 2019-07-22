import reducer from "./fields";
import { FETCH_FIELDS_SUCCESS, FETCH_FIELDS_ERROR } from "../actions/types";

describe('Reducer: fields', () => {
    it('fetching fields successfully', () => {
        const resultado = reducer({}, {
            type: FETCH_FIELDS_SUCCESS,
            payload: [1, 2]
        });

        expect(resultado).toEqual({
            data: [1, 2],
            loading: false,
        });
    });

    it('fetching fields with fail', () => {
        const resultado = reducer({}, {
            type: FETCH_FIELDS_ERROR,
            payload: "error"
        });

        expect(resultado).toEqual({
            error: "error",
            loading: false,
        });
    });
});