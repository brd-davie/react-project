import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../routes/images/logo.png'
import Profile from './Profile'
import '../Hamburger'
import '../custom'
import { useState } from 'react'

const Nav = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='relative '>
      <div id='' className="nav w-full bg-[#070721]  z-[100] fixed">
        <div className="navbar md:py-5 flex-none gap-3 relative bg-[#070721] max-w-7xl mx-auto justify-between pl-2 flex-row md:flex-row">
          <div className="justify-start w-[33%] md:w-[unset]">
            <Link to='/' className="normal-case text-xl hidden md:block p-0">
              <img src={Logo} alt="Logo" className='w-36 ml-2 mix-blend-plus-lighter' />
              {/* <h2 className='text-white bold text-3xl'>Ani.<span className='text-teal-200	'>me</span></h2> */}
            </Link>
            <div className="dropdown md:hidden">
              <label tabIndex={0} className="" id='custom-hamburger' onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 transparent"><path stroke='#fff' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
              { showMenu && (
                <ul tabIndex={0} id='menu-dropdown' className="menu menu-compact dropdown-content mt-4 p-4 shadow text-white bg-[#070721] w-screen shadow-2xl">
                  <li onClick={toggleMenu} className='active:bg-[#07721]'><Link to='/anime/search' className='text-white text-center text-lg'>Search</Link></li>
                  <li onClick={toggleMenu} className='active:bg-[#07721]'><Link to='/anime/seasons' className='text-white text-center text-lg'>Seasons</Link></li>
                  <li onClick={toggleMenu} className='active:bg-[#07721]'><Link to='/anime/genre' className='text-white text-center text-lg'>Genres</Link></li>
                  <li onClick={toggleMenu} className='active:bg-[#07721]'><Link to='/anime/trending-anime' className='text-white text-center text-lg'>Trending</Link></li>
                  <li onClick={toggleMenu} className='active:bg-[#07721]'><Link to='/anime/character-list' className='text-white text-center text-lg'>Top Characters</Link></li>
                </ul>
              )}
            </div>
          </div>
          <ul className='hidden md:flex flex-wrap md:flex-nowrap justify-start p-0 flex-row w-full h-full'>
            <li className='h-full'><Link to='/anime/genre' className='flex items-center text-white hover:text-white hover:opacity-[unset] hover:underline px-4  h-full'>Genres</Link></li>
            <li className='h-full'><Link to='/anime/seasons' className='flex items-center text-white hover:text-white hover:opacity-[unset] hover:underline  px-4  h-full'>Seasons</Link></li>
            <li className='h-full'><Link to='/anime/trending-anime' className='flex items-center text-white hover:text-white hover:opacity-[unset] hover:underline px-4  h-full'>Trending</Link></li>
            <li className='h-full'><Link to='/anime/character-list' className='flex items-center text-white hover:text-white hover:opacity-[unset] hover:underline px-4  h-full'>Top Characters</Link></li>
            <li className='h-full'>
              <Link to='/anime/search' className='flex items-center text-white hover:underline pl -0 px-4 text-white h-full'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:opacity-[unset]" fill="none" viewBox="0 0 24 24" stroke="#fff"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </Link>
            </li>
          </ul>
          <div className="navbar-end w-[33%]  md:hidden">
            <Link to='/' className="btn-ghost normal-case text-md">
              <img src={Logo} alt="Logo" className='w-36 p-0 mix-blend-plus-lighter' />
            </Link>
          </div>
          <div className='w-[33%] justify-end'>
            <Profile />
          </div>
        </div>
      </div >
    </div >
  )
}

export default Nav