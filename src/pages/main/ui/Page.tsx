import styles from './styles.module.css'
import {LatestNews} from "./LatestNews/LatestNews.tsx";
import {NewsByFilters} from "./NewsByFilters/NewsByFilters.tsx";


export const Main = () => {
    return (
        <main className={styles.main}>
            <LatestNews />
            <NewsByFilters />
        </main>
    )
}