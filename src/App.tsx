import {Header} from "./components/Header/header.tsx";
import {Main} from "./pages/Main/Main.tsx";
import {useTheme} from "./context/ThemeContext.tsx";

export function App() {
    const {isDark}= useTheme()
    return (
            <div className={`app ${isDark ? 'dark' : 'light'}`}>
                <Header/>
                <div className='container'>
                    <Main/>
                </div>
            </div>
    )
}

