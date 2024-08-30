import styles from './styles.module.css'
import {NewsBanner} from "../../components/NewsBanner/newsBanner.tsx";
import {useEffect, useState} from "react";
import {getCategories, getNews} from "../../api/apiNews.ts";
import {NewsList} from "../../components/NewsList/NewsList.tsx";
import {Skeleton} from "../../components/Skeleton/Skeleton.tsx";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {Categories} from "../../components/Categories/Categories.tsx";


export const Main = () =>{
    //создаем состояние
    const [news, setNews] = useState<NewsBanner[]>([]);
    //состщяние категорий
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    //состояние для отображения скелетона

    const [isLoading, setIsLoading] = useState<boolean>(true);
    //состояние текущей страницы
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages:number = 10
    const pageSize:number = 10

    //запрос к серверу новости
    const fetchNews = async (currentPage) =>{
        try {
            setIsLoading(true)
            const response = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectedCategory === 'All'? null : selectedCategory
            })
            setNews(response.news)
            setIsLoading(false)
        }
        catch (error){
            console.log(error);
        }
    }
    //запрос к серверу категории
    const fetchCategories = async () =>{
        try {
            const response = await getCategories()
            setCategories(['All', ...response.categories])
        }
        catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCategories()
    }, []);

    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage, selectedCategory]);

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
            <Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
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