const SET_BURGER_ACTIVE = "SET_BURGER_ACTIVE"

const defaultState = {
    isActive: false,
}

export default function pageReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_BURGER_ACTIVE:
            return {
                ...state,
                isActive: action.payload
            }
        default:
            return state
    }
}

export const setIsActive = (bool) => ({type: SET_BURGER_ACTIVE, payload:bool})