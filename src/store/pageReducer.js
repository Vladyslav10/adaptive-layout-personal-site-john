const SET_TOKENS = "SET_TOKENS"
const SET_IS_FETCHING = "SET_IS_FETCHING"

const defaultState = {
    tokens: [],
    isFetching: true,
}

export default function btcReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TOKENS:
            return {
                ...state,
                tokens: action.payload,
                isFetching: false,
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}

export const setTokens = (payload) => ({type: SET_TOKENS, payload})
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload:bool})