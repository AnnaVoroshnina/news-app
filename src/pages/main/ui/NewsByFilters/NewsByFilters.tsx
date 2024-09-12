import styles from './styles.module.css'
import {useAppSelector} from "../../../../app/appStore.ts";
import {useGetCategoriesNewsQuery} from "../../../../entities/category/api/categoriesApi.ts";
import {NewsFilters} from "../../../../widgets/news/ui";
import {NewsListWithPagination} from "../NewsListWithPagination/NewsListWithPagination.tsx";


export const NewsByFilters = () =>{
    const filters= useAppSelector(state => state.news.filters)
    const {data: dataCategories} = useGetCategoriesNewsQuery(null)


    return (
        <section className={styles.section}>
            <NewsFilters dataCategories={dataCategories?.categories || []} filters={filters} />
            <NewsListWithPagination filters={filters}/>
        </section>
    )
}