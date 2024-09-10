import styles from './styles.module.css'
import {BannersList} from "../../../../widgets/news/ui/BannersList/BannersList.tsx";
import {Skeleton} from "../../../../shared/ui/Skeleton/Skeleton.tsx";
import {useGetLatestNewsQuery} from "../../../../entities/news/api/newsApi.ts";


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