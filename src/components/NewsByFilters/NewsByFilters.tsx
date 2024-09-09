import styles from './styles.module.css'
import {TOTAL_PAGES} from "../../constants/constants.ts";
import {NewsList} from "../NewsList/NewsList.tsx";
import {Skeleton} from "../Skeleton/Skeleton.tsx";
import {NewsFilters} from "../NewsFilters/NewsFilters.tsx";
import {PaginationWrapper} from "../PaginationWrapper/PaginationWrapper.tsx";
import {useDebounce} from "../../helpers/hooks/useDebounce.ts";
import {useGetNewsQuery} from "../../store/services/newsApi.ts";
import {useAppDispatch, useAppSelector} from "../../store";
import {setFilters} from "../../store/slices/newsSlice.ts";


export const NewsByFilters = () =>{
    const dispatch = useAppDispatch();

    const filters= useAppSelector(state => state.news.filters)
    const debouncedKeyWords = useDebounce(filters.keywords, 1500)
    const { data, isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeyWords
    })

    //навигация по кнопкам
    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            dispatch(setFilters({key: 'page_number', value: filters.page_number + 1}))
        }
    }
    const handlePrevPage = () => {
        if (filters.page_number > 1) {
            dispatch(setFilters({key: 'page_number', value: filters.page_number - 1}))
        }
    }
    const handlePageClick = (pageNumber: number) => {
        dispatch(setFilters({key: 'page_number', value: pageNumber}))
    }

    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} />
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