import styles from './styles.module.css'
import {useTheme} from "../../context/ThemeContext.tsx";

type PropsSearch = {
    keywords: string,
    setKeywords: (keywords: string) => void
}
export const Search = ({keywords, setKeywords}: PropsSearch) =>{
    const {isDark}= useTheme()
    return (
        <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
            <input
                type="text"
                value={keywords}
                className={styles.input}
                onChange={(event) => setKeywords(event.target.value)}
                placeholder='Search news'
            />
        </div>
    )
}