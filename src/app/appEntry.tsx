import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {Provider} from "react-redux";
import {ThemeProvider} from "./providers/ThemeProvider.tsx";
import {store} from "./appStore.ts";
import {App} from "./layouts/BaseLayout.tsx";
import "@/shared/index.css";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </StrictMode>,
)