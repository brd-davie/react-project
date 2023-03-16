import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ handlePageClick }) => {
  return (
    <div id='custom-pagination' className="btn-group flex justify-center my-20">
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={20}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'btn-group flex gap-2 text-success'}
        pageClassName={'btn btn-accent btn-xs'}
        previousClassName={'btn btn-accent btn-xs'}
        nextClassName={'btn btn-accent btn-xs'}
        activeClassName={'btn-active'}
      />
    </div>
  )
}

export default Pagination