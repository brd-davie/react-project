import React, { useEffect, useState } from "react";
import Nav from '../components/Nav'

function ProfilePage() {

  const [currentUser, setCurrentUser] = useState('');
  const [userImage, setUserImage] = useState('');


  useEffect(() => {
    // const getCurrentUser = () => {
      console.log(localStorage.getItem('user'));
       setCurrentUser(JSON.parse(localStorage.getItem('user')));
       setUserImage(`https://robohash.org/${currentUser.id}`)
    // }
  }, [])
  return (
    <div className="">
      <Nav />
      <div className="pt-[70px] max-w-[1250px] mx-auto">
        <img src={userImage} alt=""className="w-[100px] h-[100px] rounded-full glass" />
        <p className="text-3xl text-white">{currentUser.id}</p>
        <p className="text-3xl text-white">{currentUser.first_name} {currentUser.last_name}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
