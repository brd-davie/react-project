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
        containerClassName={'btn-group flex gap-2 text-white opacity-[.8]'}
        pageClassName={'w-7 bg-black text-white opacity-[0.8] rounded-sm flex justify-center items-center p-0 hover:underline'}
        previousClassName={'text-white opacity-[0.5] px-4 py-1 hover:underline hover:opacity-[unset]'}
        nextClassName={'text-white opacity-[0.5] px-4 py-1 hover:underline hover:opacity-[unset]'}
        activeClassName={'bg-primary text-white text-md cursor-not-allowed hover:none p-0'}
      />
    </div>
  )
}

export default Pagination