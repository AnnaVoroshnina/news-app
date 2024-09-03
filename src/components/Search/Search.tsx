import styles from './styles.module.css'

type PropsSearch = {
    keywords: string,
    setKeywords: (keywords: string) => void
}
export const Search = ({keywords, setKeywords}: PropsSearch) =>{
    return (
        <div className={styles.search}>
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