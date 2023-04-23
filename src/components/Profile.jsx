import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Profile = () => {

  const [user, setUser] = useState('');

  const navigate = useNavigate();
  const handleLogout = () => {
    // remove user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login')
  }

  useEffect(() => {
     setUser(JSON.parse(localStorage.getItem('user')));
}, [])

  return (
    <div className="dropdown dropdown-end flex">
      <label tabIndex={0} className="transparent px-2 cursor-pointer flex items-center opacity-[.6] hover:opacity-[unset] hover:underline">
        <h4 className='text-white p-2 rounded-full uppercase'>{user.first_name}</h4>
        <svg className='hover:opacity-[unset]' fill="#ffffff" width="27px" height="27px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
          <path d="M228,128A100,100,0,1,0,60.71,201.90967a3.97048,3.97048,0,0,0,.842.751,99.79378,99.79378,0,0,0,132.8982-.00195,3.96558,3.96558,0,0,0,.83813-.74756A99.76267,99.76267,0,0,0,228,128ZM36,128a92,92,0,1,1,157.17139,64.87207,75.616,75.616,0,0,0-44.50782-34.04053,44,44,0,1,0-41.32714,0,75.61784,75.61784,0,0,0-44.50782,34.04A91.70755,91.70755,0,0,1,36,128Zm92,28a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,156ZM68.86475,198.417a68.01092,68.01092,0,0,1,118.27.00049,91.80393,91.80393,0,0,1-118.27-.00049Z" />
        </svg>
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-black mt-10 rounded-box w-30">
        <li>
          <Link to='/profile' className='text-white opacity-[.6] bg-black hover:underline hover:opacity-[unset]'>Profile
          <svg className='' fill="#ffffff" width="27px" height="27px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
            <path d="M228,128A100,100,0,1,0,60.71,201.90967a3.97048,3.97048,0,0,0,.842.751,99.79378,99.79378,0,0,0,132.8982-.00195,3.96558,3.96558,0,0,0,.83813-.74756A99.76267,99.76267,0,0,0,228,128ZM36,128a92,92,0,1,1,157.17139,64.87207,75.616,75.616,0,0,0-44.50782-34.04053,44,44,0,1,0-41.32714,0,75.61784,75.61784,0,0,0-44.50782,34.04A91.70755,91.70755,0,0,1,36,128Zm92,28a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,156ZM68.86475,198.417a68.01092,68.01092,0,0,1,118.27.00049,91.80393,91.80393,0,0,1-118.27-.00049Z" />
          </svg>
          </Link>
        </li>
        <li>
          <Link to='/login' className='text-white opacity-[.6] hover:underline hover:opacity-[unset]' onClick={handleLogout}>Logout
            <svg className='' width="25px" height="25px" viewBox="0 0 24 24" fill="#0000" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 12L21 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 15L13.087 12.087V12.087C13.039 12.039 13.039 11.961 13.087 11.913V11.913L16 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Profile