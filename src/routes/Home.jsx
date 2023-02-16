import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Home = () => {
  return (
    <div>
      <Nav />
      <div id="hp-container" className='overflow-hidden'>
        <div id="hp-content" className='flex flex-row  items-center h-screen'>
          <div className="flex flex-col px-5 max-w-screen-lg mx-auto">
            <h1 className='text-3xl md:text-5xl md:w-1/2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <Link to='#' className='btn btn-primary btn-md text-md mt-12 w-max'>
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home