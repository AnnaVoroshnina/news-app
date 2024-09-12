import {TOTAL_PAGES} from "../../../../shared/constants/constants.ts";
import {Skeleton} from "../../../../shared/ui/Skeleton/Skeleton.tsx";
import {useDebounce} from "../../../../shared/hooks/useDebounce.ts";
import {useGetNewsQuery} from "../../../../entities/news/api/newsApi.ts";
import {IFilters} from "../../../../shared/interfaces";
import {usePaginationNews} from "../../utils/hooks/usePaginationNews.ts";
import {Pagination} from "../../../../features/pagination";
import {NewsList} from "../../../../widgets/news/ui";

interface  Props {
    filters: IFilters,
}

export const NewsListWithPagination = ({filters}: Props) =>{
    const debouncedKeyWords = useDebounce(filters.keywords, 1500)
    const { data, isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeyWords
    })

    //навигация по кнопкам
    const {handleNextPage, handlePrevPage, handlePageClick} = usePaginationNews(filters)

    return (
            <Pagination
                top={true}
                bottom={false}
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            >
                {!isLoading ? (<NewsList news={data?.news} type={'item'}/>) : (<Skeleton type={'item'} count={10}/>)}
            </Pagination>
    )
}