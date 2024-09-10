export interface IPaginationProps {
    totalPages: number,
    handleNextPage: () => void,
    handlePrevPage: () => void,
    handlePageClick: (page: number) => void,
    currentPage: number
}