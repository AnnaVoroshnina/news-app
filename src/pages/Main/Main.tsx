import styles from './styles.module.css'
import {NewsBanner} from "../../components/NewsBanner/newsBanner.tsx";
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.ts";
import {NewsList} from "../../components/NewsList/NewsList.tsx";
import {Skeleton} from "../../components/Skeleton/Skeleton.tsx";

export const Main = () =>{
    //создаем состояние
    const [news, setNews] = useState<NewsBanner[]>([]);
    //состояние для отображения скелетона
    const [isLoading, setIsLoading] = useState(true);

    //будем делать запрос к серверу
    useEffect(() => {
        setIsLoading(true)
        const fetchNews = async () =>{
            try {
                const response = await getNews()
                setNews(response.news)
                setIsLoading(false)
            }
            catch (error){
                console.log(error);
            }
        }
        //не забываем вызвать функцию
        fetchNews()
    }, []);
    console.log(news)
    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (<NewsBanner item={news[0]}/>) : (<Skeleton type={'banner'} count={1} />)}
            {!isLoading ? (<NewsList news={news}/>) : (<Skeleton type={'item'} count={10} />)}
        </main>
)
}