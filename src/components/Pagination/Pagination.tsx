import styles from './styles.module.css'
import {IPaginationProps} from "../../interfaces";
import {useTheme} from "../../context/ThemeContext.tsx";


export const Pagination = ({totalPages, handleNextPage, handlePrevPage, handlePageClick, currentPage}: IPaginationProps) => {
    const {isDark}= useTheme()
    return (
        <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
            <button
                className={styles.arrow}
                onClick={handlePrevPage}
                disabled={currentPage <=1}
            >{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return <button
                        className={styles.pageNumber}
                        key={index}
                        onClick={() => handlePageClick(index + 1)}
                        disabled={index + 1 === currentPage}
                    >{index + 1}</button>
                })}
            </div>
            <button
                className={styles.arrow}
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}

            >{'>'}</button>
        </div>
    )
}