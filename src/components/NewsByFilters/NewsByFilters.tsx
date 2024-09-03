import styles from './styles.module.css'
import {PAGE_SIZE, TOTAL_PAGES} from "../../constants/constants.ts";
import {NewsList} from "../NewsList/NewsList.tsx";
import {Skeleton} from "../Skeleton/Skeleton.tsx";
import {NewsFilters} from "../NewsFilters/NewsFilters.tsx";
import {PaginationWrapper} from "../PaginationWrapper/PaginationWrapper.tsx";
import {useFilters} from "../../helpers/hooks/useFilters.ts";
import {useDebounce} from "../../helpers/hooks/useDebounce.ts";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getNews} from "../../api/apiNews.ts";
import {NewsApiResponse, ParamsType} from "../../interfaces";

export const NewsByFilters = () =>{
    const {filters, changeFilter} = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: ''
    })

    const debouncedKeyWords = useDebounce(filters.keywords, 1500)


    const {data, isLoading} = useFetch<ParamsType, NewsApiResponse>(getNews, {
        ...filters,
        keywords: debouncedKeyWords
    })

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
    const handlePageClick = (pageNumber: number) => {
        changeFilter('page_number', pageNumber)
    }
    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} changeFilter={changeFilter} />
            <PaginationWrapper
                top={true}
                bottom={false}
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            >
                {!isLoading ? (<NewsList news={data?.news}/>) : (<Skeleton type={'item'} count={10}/>)}
            </PaginationWrapper>
        </section>
    )
}