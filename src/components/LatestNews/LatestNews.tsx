import styles from './styles.module.css'
import {BannersList} from "../BannersList/BannersList.tsx";
import {Skeleton} from "../Skeleton/Skeleton.tsx";
import {useGetLatestNewsQuery} from "../../store/services/newsApi.ts";


export const LatestNews = () =>{
    const {data, isLoading} = useGetLatestNewsQuery(null)
    return (
        <section className={styles.section}>
            {data && data.news.length > 0 && !isLoading
                ? (<BannersList banners={data && data.news} />)
                : (<Skeleton type={'banner'} count={10}/>)
            }
        </section>
    )
}