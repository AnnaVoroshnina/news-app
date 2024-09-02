import styles from './styles.module.css'
import {Categories} from "../Categories/Categories.tsx";
import {Search} from "../Search/Search.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getCategories} from "../../api/apiNews.ts";

export const NewsFilters = ({filters, changeFilter}) =>{
    const {data: dataCategories} = useFetch(getCategories, null)
    return (
        <div className={styles.filters}>
            {dataCategories
                ? <Categories
                    categories={dataCategories.categories}
                    selectedCategory={filters.category}
                    setSelectedCategory={(category) => changeFilter('category', category)}/>
                : null}
            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>
        </div>
    )
}