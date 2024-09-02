import styles from './styles.module.css'

type PropsSearch = {
    keywords: string,
    setKeywords: (keywords) => void
}
export const Search = (props: PropsSearch) =>{
    return (
        <div className={styles.search}>
            <input
                type="text"
                value={props.keywords}
                className={styles.input}
                onChange={(event) => props.setKeywords(event.target.value)}
                placeholder='Search news'
            />
        </div>
    )
}