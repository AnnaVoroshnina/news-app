import {Pagination} from "../Pagination/Pagination.tsx";
import React from "react";
import {IPaginationProps} from "../../interfaces";

interface PropsPaginationWrapper {
    children: React.ReactNode;
    top?: boolean,
    bottom?: boolean,

}
export const PaginationWrapper = ({top, bottom, children, ...paginationProps}: PropsPaginationWrapper & IPaginationProps) =>{
return (
    <>
        {top && <Pagination{...paginationProps}/>}
        {children}
        {bottom && <Pagination{...paginationProps}/>}

    </>
)
}