import React from 'react';
import ReactPaginate from "react-paginate";

const Pagination = ({clickedPaged, pageCount}) => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="&raquo;"
            onPageChange={clickedPaged}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="&laquo;"
            renderOnZeroPageCount={null}
            className='pagination'
            pageClassName='page-item'
            previousClassName='page-link'
            nextClassName='page-link'
            pageLinkClassName={'page-link'}
            activeClassName='active'
        />
    );
};

export default Pagination;