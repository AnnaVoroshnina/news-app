import {createBrowserRouter} from "react-router-dom";
import {App} from "./layouts/BaseLayout.tsx";
import {Main} from "../pages/main";
import {NewsPage} from "../pages/news";

export const appRouter = createBrowserRouter([
    {
        element: <App />,
        errorElement: <div>Error</div>,
        children: [
            {path: '/', element: <Main/>},
            {path: '/news/:id', element: <NewsPage />}
        ]
    },
]);