import styles from './styles.module.css'
import {NewsBanner} from "../../components/NewsBanner/newsBanner.tsx";
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.ts";
import {NewsList} from "../../components/NewsList/NewsList.tsx";

export const Main = () =>{
    //создаем состояние
    const [news, setNews] = useState<NewsBanner[]>([]);

    //будем делать запрос к серверу
    useEffect(() => {
        const fetchNews = async () =>{
            try {
                const response = await getNews()
                setNews(response.news)
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
            {news.length > 0 ? <NewsBanner item={news[0]}/> : null}

            <NewsList news={news} />
        </main>
)
}