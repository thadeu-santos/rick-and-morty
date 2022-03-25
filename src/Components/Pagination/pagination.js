import React from 'react'
import ReactPaginate from 'react-paginate'

const pagination = ({info, pageNumber, setPageNumber }) => {
    return (
        <ReactPaginate 
        className="pagination justify-content-center gap-4 my-4"
        forcePage={pageNumber === 1 ? 0: pageNumber - 1}
        previousLabel="Prev"
        nextLabel="Next"
        nextClassName="btn btn-info"
        previousClassName="btn btn-info"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        onPageChange={(data) => {
            setPageNumber(data.selected + 1)
        }}

        pageCount={info?.pages}/>
    )
}

export default pagination
