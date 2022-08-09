const SET__BLOG_POST = "SET__BLOG_POST";

const defaultState = {
    blogPosts: [
        {
            title: 'UI Interactions of the week',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            data: '12 Feb 2019',
            class: 'blog__article article',
            design: 'Express, Handlebars',
        },
        {
            title: 'UI Interactions of the week',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            data: '12 Feb 2019',
            class: 'blog__article article',
            design: 'Express, Handlebars',
        },
        {
            title: 'UI Interactions of the week',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            data: '12 Feb 2019',
            class: 'blog__article article',
            design: 'Express, Handlebars',
        },
        {
            title: 'UI Interactions of the week',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit  mollit. Exercitation veniam consequat sunt nostrud amet.',
            data: '12 Feb 2019',
            class: 'blog__article article',
            design: 'Express, Handlebars',
        },
    ],
}

export default function blogReducer (state = defaultState, action) {
    switch (action.type) {
        case SET__BLOG_POST:
            return {
                ...state,
                blogPosts: [...state.blogPosts, action.payload]
            }
        default:
            return state
    }
}