
import styles from './styles.module.css'
import {BannersList} from "../BannersList/BannersList.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getLatestNews} from "../../api/apiNews.ts";

export const LatestNews = () =>{
    const {data} = useFetch(getLatestNews)
    return (
        <section className={styles.section}>
            <BannersList banners={data && data.news} />
        </section>
    )
}