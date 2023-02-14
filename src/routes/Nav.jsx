import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null
    }
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  searchAnime = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://gogoanime.consumet.stream/search?keyw=${this.state.search}`)
        .then((response) => response.json())
        .then((animelist) => console.log(animelist));
    }
  };

  render() {
    return (
      <>
        <div className="nav w-full bg-primary sticky">
          <div className="navbar bg-primary text-primary-context max-w-screen-lg mx-auto h-12">
            <div className="flex-1">
              <Link to='/' className="btn btn-ghost normal-case text-xl text-white">PHCOLLAB</Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li><Link to='/anime' className='text-white'>Anime List</Link></li>
                {/* <li tabIndex={0}>
                  <a>
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                  </a>
                  <ul className="p-2 bg-base-100">
                    <li><Link to='popular-anime'>Anime</Link></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li> */}
                <li><Link to='/login' className='text-white'>Login</Link></li>
                <li>
                  <div className="form-control hidden md:block">
                    <input onChange={this.handleChange} onKeyDown={this.searchAnime} type="text" value={this.state.search} placeholder="Search" className="input input-bordered h-9" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Nav