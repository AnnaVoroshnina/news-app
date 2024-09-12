import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {Provider} from "react-redux";
import {ThemeProvider} from "./providers/ThemeProvider.tsx";
import {store} from "./appStore.ts";
import "@/shared/index.css";
import {RouterProvider} from "react-router-dom";
import {appRouter} from "./appRouter.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <RouterProvider router={appRouter} />
            </Provider>
        </ThemeProvider>
    </StrictMode>,
)