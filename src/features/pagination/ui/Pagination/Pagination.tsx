import {PaginationButtons} from "../PaginationButtons/PaginationButtons.tsx";
import React from "react";
import {IPaginationProps} from "../../model/types.ts";

interface PropsPaginationWrapper {
    children: React.ReactNode;
    top?: boolean,
    bottom?: boolean,
}

export const Pagination = ({top, bottom, children, ...paginationProps}: PropsPaginationWrapper & IPaginationProps) =>{
return (
    <>
        {top && <PaginationButtons {...paginationProps}/>}
        {children}
        {bottom && <PaginationButtons {...paginationProps}/>}

    </>
)
}