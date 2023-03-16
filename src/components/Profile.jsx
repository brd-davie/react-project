import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <li className='avatar online placeholder'>
      <Link to='/profile' className="bg-black-focus text-neutral-content bg-slate-800 rounded-full ">
        <span className="text-sm">D</span>
      </Link >
    </li>
  )
}

export default Profile