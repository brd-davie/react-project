import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './images/logo.png'

class Nav extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     search: ''
  //   }
  // }
  // handleChange = (e) => {
  //   this.setState({ search: e.target.value });
  // };
  // searchAnime = (e) => {
  //   if (e.key === 'Enter') {
  //     fetch(`https://gogoanime.consumet.stream/search?keyw=${this.state.search}`)
  //       .then((response) => response.json())
  //       .then((animelist) => console.log(animelist));
  //   }
  // };

  render() {
    return (
      <>
        <div className="nav w-full bg-black sticky z-10">
          <div className="navbar bg-black max-w-7xl mx-auto pr-3 md:px-4  justify-between relative">
            <div className="navbar-start">
              <Link to='/' className="btn btn-ghost normal-case text-xl hidden md:block p-0">
                <img src={Logo} alt="Logo" className='w-36' />
              </Link>
              <div className="dropdown md:hidden">
                <label tabIndex={0} className="">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-white rounded-box w-52">
                  <li><Link to='/anime/popular-anime'>Trending</Link></li>
                  <li><Link to='/anime/anime-movies'>Movies</Link></li>
                  <li><Link to='/anime/character-list'>Top Characters</Link></li>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
            </div>
            <ul className='hidden md:flex flex-wrap gap-4 absolute right-0 h-full'>
              <li className='h-full'><Link to='/anime/popular-anime' className='flex items-center text-white hover:bg-neutral hover:text-white px-4 text-white h-full'>Trending</Link></li>
              <li className='h-full'><Link to='/anime/anime-movies' className='flex items-center text-white hover:bg-neutral hover:text-white px-4 text-white h-full'>Movies</Link></li>
              <li className='h-full'><Link to='/anime/character-list' className='flex items-center text-white hover:bg-neutral hover:text-white px-4 text-white h-full'>Top Characters</Link></li>
            </ul>
            <div className="navbar-end md:hidden">
              {/* <button className="btn btn-white btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <button className="btn btn-white btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button> */}
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