import styles from './styles.module.css'
import {LatestNews} from "../../components/LatestNews/LatestNews.tsx";
import {NewsByFilters} from "../../components/NewsByFilters/NewsByFilters.tsx";

export const Main = () => {
    return (
        <main className={styles.main}>
            <LatestNews />
            <NewsByFilters />
        </main>
    )
}