import styles from './styles.module.css'
import {ForwardedRef, forwardRef} from "react";
import {CategoriesType} from "../../interfaces";

interface  PropsCategories {
    categories: CategoriesType[],
    setSelectedCategory: (category: CategoriesType | null) => void,
    selectedCategory: CategoriesType | null
}

export const Categories =
    forwardRef(({categories, setSelectedCategory, selectedCategory} : PropsCategories, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className={styles.categories}>
            <button
                className={!selectedCategory ? styles.active : styles.item}
                onClick={() => setSelectedCategory(null)}
            >All
            </button>
            {categories.map(category => {
                return (
                    <button
                        key={category}
                        className={selectedCategory === category ? styles.active : styles.item}
                        onClick={() => setSelectedCategory(category)}
                    >{category}</button>
                )
            })}
        </div>
    )
})

Categories.displayName = 'Categories'
