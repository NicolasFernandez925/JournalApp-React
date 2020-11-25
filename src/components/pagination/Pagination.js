import React from 'react';
import Pagination from 'rc-pagination'

import './pagination.scss';

export const PaginationMovies = (props) => {

    const { currentPage, totalItems, onChangePage} = props
    return (
        <Pagination 
            current = {currentPage}
            total= {totalItems}
            pageSize = {20}
            onChange={onChangePage}
        />
    )
}
