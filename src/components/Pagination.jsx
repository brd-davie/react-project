import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ handlePageClick }) => {
  return (
    <div id='custom-pagination' className="btn-group flex justify-center mt-10 lg:mt-20 mb-5">
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={10}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'btn-group flex gap-2 text-white opacity-[.8]'}
        pageClassName={'w-7 text-white opacity-[0.9] rounded-sm flex justify-center items-center p-0'}
        previousClassName={'text-white opacity-[0.9] px-4 py-1 hover:underline hover:opacity-[unset]'}
        nextClassName={'text-white opacity-[0.9] px-4 py-1 hover:underline hover:opacity-[unset]'}
        activeClassName={'bg-[#E53537] text-[#111111] text-md cursor-not-allowed hover:none p-0'}
      />
    </div>
  )
}

export default Pagination