import styles from './styles.module.css'
import {NewsBanner} from "../../components/NewsBanner/newsBanner.tsx";
import {getCategories, getNews} from "../../api/apiNews.ts";
import {NewsList} from "../../components/NewsList/NewsList.tsx";
import {Skeleton} from "../../components/Skeleton/Skeleton.tsx";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {Categories} from "../../components/Categories/Categories.tsx";
import {Search} from "../../components/Search/Search.tsx";
import {useDebounce} from "../../helpers/hooks/useDebounce.ts";
import {PAGE_SIZE, TOTAL_PAGES} from "../../constants/constants.ts";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {useFilters} from "../../helpers/hooks/useFilters.ts";


export const Main = () => {
    const {filters, changeFilter} = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: ''
    })

    const debouncedKeyWords = useDebounce(filters.keywords, 1500)


    const {data, isLoading} = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeyWords
    })
    const {data: dataCategories} = useFetch(getCategories, null)

//навигация по кнопкам
    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilter('page_number', filters.page_number + 1)
        }
    }
    const handlePrevPage = () => {
        if (filters.page_number > 1) {
            changeFilter('page_number', filters.page_number - 1)

        }
    }
    const handlePageClick = (pageNumber) => {
        changeFilter('page_number', pageNumber)
    }

    return (
        <main className={styles.main}>
            {dataCategories
                ? <Categories
                    categories={dataCategories.categories}
                    selectedCategory={filters.category}
                    setSelectedCategory={(category) => changeFilter('category', category)}/>
                : null}
            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>
            {data && data.news.length > 0 && !isLoading ? (<NewsBanner item={data.news[0]}/>) : (
                <Skeleton type={'banner'} count={1}/>)}
            <Pagination
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            />
            {!isLoading ? (<NewsList news={data?.news}/>) : (<Skeleton type={'item'} count={10}/>)}
            <Pagination
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            />
        </main>
    )
}