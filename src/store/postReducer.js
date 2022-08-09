const SET_VIEW_POST_ACTIVE = "SET_VIEW_POST_ACTIVE";
const SET__POST_INFO = "SET__POST_INFO";

const defaultState = {
    viewPost: false,
    postsInfo: [
        {
            title: 'Making a design system from scratch',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            data: '12 Feb 2020',
            class: 'posts__article article',
            design: 'Design, Pattern',
        },
        {
            title: 'Creating pixel perfect icons in Figma',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            data: '12 Feb 2020',
            class: 'posts__article article',
            design: 'Figma, Icon Design',
        },
        {
            title: 'Making a design system from scratch',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            data: '12 Feb 2020',
            class: 'posts__article article article-hiden',
            design: 'Design, Pattern',
        },
        {
            title: 'Creating pixel perfect icons in Figma',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit  mollit. Exercitation veniam consequat sunt nostrud amet.',
            data: '12 Feb 2020',
            class: 'posts__article article article-hiden',
            design: 'Figma, Icon Design',
        },
    ],
}

export default function postReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_VIEW_POST_ACTIVE:
            return {
                ...state,
                viewPost: action.payload
            }
        case SET__POST_INFO:
            return {
                ...state,
                postsInfo: [...state.postsInfo, action.payload]
            }
        default:
            return state
    }
}

export const setViewPostActive = (bool) => ({type: SET_VIEW_POST_ACTIVE, payload:bool})