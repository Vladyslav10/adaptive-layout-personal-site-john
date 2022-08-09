import girls from '../img/works/girl.png';
import dashboard from '../img/works/dashboard.png';
import logo from '../img/works/logo.png';
import calendar from '../img/works/calendar.png';
const SET__WORK_POST = "SET__BLOG_POST";


const defaultState = {
    workPosts: [
        {
            img: `${dashboard}`,
            alt: 'dashboard',
            title: 'Designing Dashboards',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            year: '2020',
            design: 'Dashboard',
        },
        {
            img: `${girls}`,
            alt: 'girl',
            title: 'Vibrant Portraits of 2020',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            year: '2018',
            design: 'Illustration',
        },
        {
            img: `${logo}`,
            alt: 'logo',
            title: '36 Days of Malayalam type',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            year: '2018',
            design: 'Typography',
        },
        {
            img: `${calendar}`,
            alt: 'calendar',
            title: 'Components',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit  mollit. Exercitation veniam consequat sunt nostrud amet.',
            year: '2018',
            design: 'Components, Design',
        },
    ],
}

export default function workReducer (state = defaultState, action) {
    switch (action.type) {
        case SET__WORK_POST:
            return {
                ...state,
                workPosts: [...state.workPosts, action.payload]
            }
        default:
            return state
    }
}