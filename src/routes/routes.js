import Blog from "../pages/blog/Blog";
import Main from "../pages/main/Main";
import Work from "../pages/workDetailed/Work";
import Works from "../pages/works/Works";
import { BLOG_ROUTE, MAIN_ROUTE, WORKS_ROUTE, WORK_ROUTE } from "../utils/consts";

export const routs = [
    {
        path: MAIN_ROUTE,
        Component: Main,
    },
    {
        path: BLOG_ROUTE,
        Component: Blog,
    },
    {
        path: WORKS_ROUTE,
        Component: Works,
    },
    {
        path: WORK_ROUTE + '/:id',
        Component: Work,
    }
]