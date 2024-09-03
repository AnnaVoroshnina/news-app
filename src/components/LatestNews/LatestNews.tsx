
import styles from './styles.module.css'
import {BannersList} from "../BannersList/BannersList.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getLatestNews} from "../../api/apiNews.ts";
import {Skeleton} from "../Skeleton/Skeleton.tsx";
import {NewsApiResponse} from "../../interfaces";


export const LatestNews = () =>{
    const {data, isLoading} = useFetch<null, NewsApiResponse>(getLatestNews)
    return (
        <section className={styles.section}>
            {data && data.news.length > 0 && !isLoading
                ? (<BannersList banners={data && data.news} />)
                : (<Skeleton type={'banner'} count={10}/>)
            }
        </section>
    )
}