import React, { useEffect, useState } from "react";
import Nav from '../components/Nav'
// import Footer from "../components/Footer";
// import AnimeSlick from "../components/AnimeSlick";
// import Nier from '../components/Icons/autoMata.jpg'
// import Image from '../components/Icons/yourname.jpg'
import BG from '../components/Icons/spirited-away.jpg'

function ProfilePage() {

  const [currentUser, setCurrentUser] = useState('');
  // const [userImage, setUserImage] = useState('');


  useEffect(() => {
      // console.log(localStorage.getItem('user'));
       setCurrentUser(JSON.parse(localStorage.getItem('user')));
      //  setUserImage(`https://kawaii.red/api/png/`)
  }, [])
  
  return (
    <div className="relative">
      <Nav />
      <div className="glass overflow-hidden glass">
        <img src={BG} alt="" className="absolute w-full h-full object-cover" />
        <div className="flex items-center h-screen">
          {/* <img src={Image} alt=""className="absolute right-0 top-0 bottom-0 left-0 object-cover z-[1] w-full h-[inherit] lg:h-[unset]" /> */}
          <div className="flex flex-col z-[2] w-full gap-5 max-w-[1280px] mx-auto">
            <h2 className="text-2xl md:text-5xl bold text-white pl-4">Official account of</h2>
          {/* <img src={userImage} alt="" className="h-20 w-20 z-10 ml-5" /> */}
            {
              currentUser.first_name ? (
                <h1 className="text-5xl md:text-7xl text-white pl-4 mb-3">{currentUser.first_name} {currentUser.last_name}</h1>
              ): (
                <h1 className="text-4xl md:text-7xl text-white pl-4 mb-3">UNKNOWN</h1>
              )
            }
            <p className="text-xl text-white pl-4">{currentUser.email}</p>
          </div>
        </div>
      </div>
      {/* <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/upcoming?limit=12`} header='Upcoming' link={`${'/anime/upcoming'}`} /> */}
      {/* <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/2022/winter?limit=12`} header='Winter 2022' link={`${'/anime/seasons'}`} /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default ProfilePage;
