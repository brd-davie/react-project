import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../routes/images/logo.png'
import Profile from './Profile'

const Nav = () => {

  return (
    <div className='relative '>
      <div id='custom-navigation' className="nav w-full fixed bg-black  z-[100]">
        <div className="navbar flex-none gap-3 relative bg-black max-w-7xl mx-auto pl-2 flex-row md:flex-row justify-between relative ">
          <div className="navbar-end justify-start w-[33%]">
            <Link to='/' className="btn btn-ghost normal-case text-xl hidden md:block pr-5">
              <img src={Logo} alt="Logo" className='w-36' />
            </Link>
            <div className="dropdown md:hidden">
              <label tabIndex={0} className="w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} id='menu-dropdown' className="menu menu-compact dropdown-content mt-4 p-4 shadow text-white bg-black w-screen">
                <li><Link to='/anime/search' className='text-white opacity-[.6] text-center text-lg'>Search</Link></li>
                <li><Link to='/anime/genre' className='text-white opacity-[.6] text-center text-lg'>Genres</Link></li>
                <li><Link to='/anime/trending-anime' className='text-white opacity-[.6] text-center text-lg'>Trending</Link></li>
                <li><Link to='/anime/character-list' className='text-white opacity-[.6] text-center text-lg'>Top Characters</Link></li>
              </ul>
            </div>
          </div>
          <ul className='hidden md:flex menu menu-horizontal w-full flex-wrap md:flex-nowrap justify-end p-0  flex-end h-full'>
            <li className='h-full'><Link to='/anime/search' className='flex items-center text-white hover:text-primary hover:underline bg-black pl -0 px-4 text-white h-full'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-[.6] hover:opacity-[unset]" fill="none" viewBox="0 0 24 24" stroke="#fff"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </Link></li>
            <li className='h-full'><Link to='/anime/genre' className='flex items-center text-white opacity-[.6] hover:text-white hover:opacity-[unset] hover:underline bg-black px-4 text-white h-full'>Genres</Link></li>
            <li className='h-full'><Link to='/anime/trending-anime' className='flex items-center text-white opacity-[.6] hover:text-white hover:opacity-[unset] hover:underline bg-black px-4 text-white h-full'>Trending</Link></li>
            <li className='h-full'><Link to='/anime/character-list' className='flex items-center text-white opacity-[.6] hover:text-white hover:opacity-[unset] hover:underline bg-black px-4 text-white h-full'>Top Characters</Link></li>
            <Profile />
          </ul>
          <div className="navbar-end w-[33%]  md:hidden">
            <Link to='/' className="btn-ghost normal-case text-md">
              <img src={Logo} alt="Logo" className='w-36 p-0' />
            </Link>
          </div>
          <div className='md:hidden w-[33%] justify-end'>
            <Profile />
          </div>
        </div>
      </div >
    </div >
  )
}

export default Nav