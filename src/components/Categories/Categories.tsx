import styles from './styles.module.css'
import {forwardRef} from "react";

export const Categories =
    forwardRef(({categories, setSelectedCategory, selectedCategory}, ref) => {
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
