import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ handlePageClick }) => {
  return (
    <div id='custom-pagination' className="btn-group flex justify-center my-20">
      <ReactPaginate
        previousLabel={'«'}
        nextLabel={'»'}
        breakLabel={'...'}
        pageCount={10}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'btn-group flex gap-2 text-success'}
        pageClassName={'btn btn-success btn-sm'}
        previousClassName={'btn btn-success btn-sm'}
        nextClassName={'btn btn-success btn-sm'}
        activeClassName={'btn-active'}
      />
    </div>
  )
}

export default Pagination