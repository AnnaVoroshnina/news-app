import styles from './styles.module.css'
import {Categories} from "../Categories/Categories.tsx";
import {Search} from "../Search/Search.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getCategories} from "../../api/apiNews.ts";
import {Slider} from "../Slider/Slider.tsx";
import {CategoriesType, IFilters} from "../../interfaces";

interface  PropsNewsFilters {
    filters: IFilters,
    changeFilter: (key: string, value: string | number | null) => void,
}
export const NewsFilters = ({filters, changeFilter} : PropsNewsFilters) => {
    const {data: dataCategories} = useFetch<CategoriesType>(getCategories)
    return (
        <div className={styles.filters}>
            {dataCategories
                ? <Slider step={200}>
                    <Categories
                        categories={dataCategories.categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={(category) => changeFilter('category', category)}/>
                </Slider>
                : null}
            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>
        </div>
    )
}