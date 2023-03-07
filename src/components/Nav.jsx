import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../routes/images/logo.png'

class Nav extends Component {
  render() {
    return (
      <>
        <div className="nav w-full bg-black sticky z-10">
          <div className="navbar bg-black max-w-7xl mx-auto pr-3 md:px-4  justify-between relative">
            <div className="navbar-start">
              <Link to='/' className="btn btn-ghost normal-case text-xl hidden md:block p-0">
                <img src={Logo} alt="Logo" className='w-36' />
              </Link>
              <div className="dropdown md:hidden w-screen">
                <label tabIndex={0} className="">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} id='menu-dropdown' className="menu menu-compact dropdown-content mt-4 p-4 shadow text-white bg-black w-screen">
                  <li><Link to='/anime/popular-anime' className='text-center text-lg'>Trending</Link></li>
                  <li><Link to='/anime/anime-movies' className='text-center text-lg'>Popular</Link></li>
                  <li><Link to='/anime/character-list' className='text-center text-lg'>Top Characters</Link></li>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
            </div>
            <ul className='hidden md:flex flex-wrap gap-4 absolute right-0 h-full'>
              <li className='h-full'><Link to='/anime/popular-anime' className='flex items-center text-white hover:bg-neutral hover:text-white px-4 text-white h-full'>Trending</Link></li>
              <li className='h-full'><Link to='/anime/anime-movies' className='flex items-center text-white hover:bg-neutral hover:text-white px-4 text-white h-full'>Popular</Link></li>
              <li className='h-full'><Link to='/anime/character-list' className='flex items-center text-white hover:bg-neutral hover:text-white px-4 text-white h-full'>Top Characters</Link></li>
            </ul>
            <div className="navbar-end md:hidden">
              <Link to='/' className="btn btn-ghost normal-case text-xl">
                <img src={Logo} alt="Logo" className='w-36' />
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Nav