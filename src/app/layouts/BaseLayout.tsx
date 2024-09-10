import {useTheme} from "../providers/ThemeProvider.tsx";
import {Header} from "../../widgets/header/ui";
import {Main} from "../../pages/main";

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