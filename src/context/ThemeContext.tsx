import React, {createContext, useContext, useState} from "react";

interface ITheme {
    isDark: boolean;
    toggleTheme: () => void;
}
export const ThemeContext = createContext<ITheme | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('Context error');
    }
    return context
}
//создаем обертку для компонент
interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => setIsDark(prevState => !prevState)

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}