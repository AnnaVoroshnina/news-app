import styles from './styles.module.css'
import {getNews} from "../../api/apiNews.ts";
import {Skeleton} from "../../components/Skeleton/Skeleton.tsx";
import {useDebounce} from "../../helpers/hooks/useDebounce.ts";
import {PAGE_SIZE} from "../../constants/constants.ts";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {useFilters} from "../../helpers/hooks/useFilters.ts";
import {LatestNews} from "../../components/LatestNews/LatestNews.tsx";
import {NewsByFilters} from "../../components/NewsByFilters/NewsByFilters.tsx";


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
    return (
        <main className={styles.main}>
            {data && data.news.length > 0 && !isLoading
                ? (<LatestNews/>)
                : (<Skeleton type={'banner'} count={10}/>)
            }
            <NewsByFilters filters={filters} changeFilter={changeFilter} isLoading={isLoading} news={data?.news}/>
        </main>
    )
}