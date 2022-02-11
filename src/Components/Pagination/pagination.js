import React from 'react'
import ReactPaginate from 'react-paginate'

const pagination = ({info, pageNumber, setPageNumber }) => {
  
    console.log(info.pages)
    return (
        <ReactPaginate pageCount={info.pages} />
    )
}

export default pagination
