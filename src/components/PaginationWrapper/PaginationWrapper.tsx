import styles from './styles.module.css'
import {Pagination} from "../Pagination/Pagination.tsx";
import {TOTAL_PAGES} from "../../constants/constants.ts";
import {NewsList} from "../NewsList/NewsList.tsx";
import {Skeleton} from "../Skeleton/Skeleton.tsx";
import {NewsFilters} from "../NewsFilters/NewsFilters.tsx";

export const PaginationWrapper = ({top, bottom, children, ...paginationProps}) =>{
return (
    <>
        {top && <Pagination{...paginationProps}/>}
        {children}
        {bottom && <Pagination{...paginationProps}/>}

    </>
)
}