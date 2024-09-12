import styles from './styles.module.css'
import {Skeleton} from "../../../../shared/ui/Skeleton/Skeleton.tsx";
import {useGetLatestNewsQuery} from "../../../../entities/news/api/newsApi.ts";
import {NewsList} from "../../../../widgets/news/ui";


export const LatestNews = () =>{
    const {data, isLoading} = useGetLatestNewsQuery(null)
    return (
        <section className={styles.section}>
            {data && data.news.length > 0 && !isLoading
                ? (<NewsList news={data && data.news} type={'banner'} />)
                : (<Skeleton type={'banner'} count={10}/>)
            }
        </section>
    )
}