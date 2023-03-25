import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ handlePageClick }) => {
  return (
    <div id='custom-pagination' className="btn-group flex justify-center mt-10 lg:mt-20 mb-5">
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={20}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'btn-group flex gap-2 text-neutral'}
        pageClassName={'btn btn-black btn-xs'}
        previousClassName={'btn btn-black btn-xs'}
        nextClassName={'btn btn-black btn-xs'}
        activeClassName={'btn-active'}
      />
    </div>
  )
}

export default Pagination