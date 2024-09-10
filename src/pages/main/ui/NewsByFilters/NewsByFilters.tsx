import styles from './styles.module.css'
import {TOTAL_PAGES} from "../../../../shared/constants/constants.ts";
import {NewsList} from "../../../../widgets/news/ui/NewsList/NewsList.tsx";
import {Skeleton} from "../../../../shared/ui/Skeleton/Skeleton.tsx";
import {NewsFilters} from "../NewsFilters/NewsFilters.tsx";
import {Pagination} from "../../../../features/pagination/ui/Pagination/Pagination.tsx";
import {useDebounce} from "../../../../shared/hooks/useDebounce.ts";
import {useGetNewsQuery} from "../../../../entities/news/api/newsApi.ts";
import {setFilters} from "../../../../entities/news/model/newsSlice.ts";
import {useAppDispatch, useAppSelector} from "../../../../app/appStore.ts";


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
            <Pagination
                top={true}
                bottom={false}
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            >
                {!isLoading ? (<NewsList news={data?.news}/>) : (<Skeleton type={'item'} count={10}/>)}
            </Pagination>
        </section>
    )
}