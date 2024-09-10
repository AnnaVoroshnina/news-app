import styles from './styles.module.css'
import {Categories} from "../../../../features/category/ui/Categories/Categories.tsx";
import {Search} from "../../../../features/search/ui/Search/Search.tsx";
import {Slider} from "../../../../features/slider/ui/Slider/Slider.tsx";
import {IFilters} from "../../../../shared/interfaces";
import {setFilters} from "../../../../entities/news/model/newsSlice.ts";
import {useAppDispatch} from "../../../../app/appStore.ts";
import {useGetCategoriesNewsQuery} from "../../../../entities/category/api/categoriesApi.ts";

interface  PropsNewsFilters {
    filters: IFilters,
}
export const NewsFilters = ({filters} : PropsNewsFilters) => {
    const {data: dataCategories} = useGetCategoriesNewsQuery(null)
    const dispatch = useAppDispatch()
    return (
        <div className={styles.filters}>
            {dataCategories
                ? <Slider step={200}>
                    <Categories
                        categories={dataCategories.categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={(category) => dispatch(setFilters({key: 'category', value: category}))}/>
                </Slider>
                : null}
            <Search keywords={filters.keywords} setKeywords={(keywords) => dispatch(setFilters({key: 'keywords', value: keywords}))}/>
        </div>
    )
}