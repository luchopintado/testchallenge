import { fetchFields } from "./fields";
import {
    FETCH_FIELDS_START,
    FETCH_FIELDS_SUCCESS,
    FETCH_FIELDS_ERROR
} from "./types";

describe('Action creators: Fields', () => {
    describe('fetchFields', () => {
        it('success case', async () => {
            const dispatch = jest.fn();
            const getState = jest.fn();
            const services = {
                axios: {
                    get: jest.fn().mockResolvedValue({
                        data: 'test'
                    })
                }
            };

            await fetchFields()(dispatch, getState, services);

            expect(dispatch.mock.calls).toEqual([
                [{ type: FETCH_FIELDS_START, error: false }],
                [{ type: FETCH_FIELDS_SUCCESS, payload: 'test' }],
            ]);
        });

        it('error case', async () => {
            const dispatch = jest.fn();
            const getState = jest.fn();
            const services = {
                axios: {
                    get: jest.fn().mockRejectedValue("error")
                }
            };

            await fetchFields()(dispatch, getState, services);

            expect(dispatch.mock.calls).toEqual([
                [{ type: FETCH_FIELDS_START, error: false }],
                [{ type: FETCH_FIELDS_ERROR, error: true, payload: "error" }]
            ]);
        });
    });
});