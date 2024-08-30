import styles from './styles.module.css'
import {NewsBanner} from "../../components/NewsBanner/newsBanner.tsx";
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.ts";
import {NewsList} from "../../components/NewsList/NewsList.tsx";
import {Skeleton} from "../../components/Skeleton/Skeleton.tsx";
import {Pagination} from "../../components/Pagination/Pagination.tsx";

export const Main = () =>{
    //создаем состояние
    const [news, setNews] = useState<NewsBanner[]>([]);
    //состояние для отображения скелетона
    const [isLoading, setIsLoading] = useState(true);
    //состояние текущей страницы
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10
    const pageSize = 10

    //запрос к серверу
    const fetchNews = async (currentPage) =>{
        try {
            setIsLoading(true)
            const response = await getNews(currentPage, pageSize)
            setNews(response.news)
            setIsLoading(false)
        }
        catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage]);

//навигация по кнопкам
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)

        }
    }
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (<NewsBanner item={news[0]}/>) : (<Skeleton type={'banner'} count={1} />)}
            <Pagination
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
            />
            {!isLoading ? (<NewsList news={news}/>) : (<Skeleton type={'item'} count={10} />)}
            <Pagination
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
            />
        </main>
)
}