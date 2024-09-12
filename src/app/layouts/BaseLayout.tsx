import {useTheme} from "../providers/ThemeProvider.tsx";
import {Header} from "../../widgets/header/ui";
import {Outlet} from "react-router-dom";

export function App() {
    const {isDark}= useTheme()
    return (
        <div className={`app ${isDark ? 'dark' : 'light'}`}>
            <Header/>
            <div className='container'>
                <Outlet />
            </div>
        </div>
    )
}