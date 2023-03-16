import React, { useState } from "react";
import Nav from '../components/Nav'
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // remove user data from localStorage
    localStorage.removeItem('token');
    navigate('/login')
    // perform any other relevant logout tasks here, such as clearing state
  }

  return (
    <>
      <Nav />
      <div className="w-full relative max-w-[1280px] mx-auto">
        <button onClick={handleLogout} className='btn btn-sm btn-error absolute right-0' >Logout</button>
      </div>
    </>
  );
}

export default ProfilePage;
