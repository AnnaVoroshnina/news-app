import styles from './styles.module.css'
import {Pagination} from "../Pagination/Pagination.tsx";
import {TOTAL_PAGES} from "../../constants/constants.ts";
import {NewsList} from "../NewsList/NewsList.tsx";
import {Skeleton} from "../Skeleton/Skeleton.tsx";
import {NewsFilters} from "../NewsFilters/NewsFilters.tsx";
import {PaginationWrapper} from "../PaginationWrapper/PaginationWrapper.tsx";

export const NewsByFilters = ({filters, changeFilter, isLoading, news}) =>{

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
                {!isLoading ? (<NewsList news={news}/>) : (<Skeleton type={'item'} count={10}/>)}
            </PaginationWrapper>
        </section>
    )
}