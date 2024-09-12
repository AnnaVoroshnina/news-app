import styles from './styles.module.css'
import {Skeleton} from "../../../../shared/ui/Skeleton/Skeleton.tsx";
import {useGetLatestNewsQuery} from "../../../../entities/news/api/newsApi.ts";
import {NewsList} from "../../../../widgets/news/ui";
import {INews} from "../../../../entities/news";
import {setCurrentNews} from "../../../../entities/news/model/newsSlice.ts";
import {useAppDispatch} from "../../../../app/appStore.ts";
import {useNavigate} from "react-router-dom";


export const LatestNews = () => {
    const {data, isLoading} = useGetLatestNewsQuery(null)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const navigateTo = (news: INews) => {
        dispatch(setCurrentNews(news))
        navigate(`/news/${news.id}`)
    }
    return (
        <section className={styles.section}>
            {data && data.news.length > 0 && !isLoading
                ? (<NewsList
                    news={data && data.news}
                    type={'banner'}
                    viewNewsSlot={(news: INews) => <p onClick={() => navigateTo(news)}>view more...</p>}
                />)
                : (<Skeleton type={'banner'} count={10}/>)
            }
        </section>
    )
}