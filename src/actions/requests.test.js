import { fetchRequests } from "./requests";
import {
    FETCH_REQUESTS_START,
    FETCH_REQUESTS_SUCCESS,
    FETCH_REQUESTS_ERROR
} from "./types";

describe('Action creators: Requests', () => {
    describe('fetchRequests', () => {
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

            await fetchRequests()(dispatch, getState, services);

            expect(dispatch.mock.calls).toEqual([
                [{ type: FETCH_REQUESTS_START, error: false }],
                [{ type: FETCH_REQUESTS_SUCCESS, payload: 'test' }],
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

            await fetchRequests()(dispatch, getState, services);

            expect(dispatch.mock.calls).toEqual([
                [{ type: FETCH_REQUESTS_START, error: false }],
                [{ type: FETCH_REQUESTS_ERROR, error: true, payload: "error" }]
            ]);
        });
    });
});
