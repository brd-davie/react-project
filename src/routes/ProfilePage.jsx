import React, { useEffect, useState } from "react";
import Nav from '../components/Nav'
import Footer from "../components/Footer";
import AnimeSlick from "../components/AnimeSlick";

function ProfilePage() {

  const [currentUser, setCurrentUser] = useState('');
  const [userImage, setUserImage] = useState('');


  useEffect(() => {
      // console.log(localStorage.getItem('user'));
       setCurrentUser(JSON.parse(localStorage.getItem('user')));
       setUserImage(`https://robohash.org/${currentUser.id}?set=set1&size=180x180`)
  }, [])
  
  return (
    <div className="">
      <Nav />
      <div className="py-[70px] p-10 max-w-[1250px] mx-auto">
        <div className="flex items-center">
          <img src={userImage} alt=""className="w-[150px] h-[150px] rounded-full bg-slate-700" />
          <div className="flex flex-col">
            <p className="text-3xl text-white pl-4">{currentUser.first_name} {currentUser.last_name}</p>
            <p className="text-xl text-white pl-4">{currentUser.email}</p>
          </div>
        </div>
      </div>
      <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/upcoming?limit=12`} header='Upcoming' link={`${'/anime/upcoming'}`} />
      <AnimeSlick endPoint={`https://api.jikan.moe/v4/seasons/2022/winter?limit=12`} header='Winter 2022' link={`${'/anime/seasons'}`} />
      <Footer />
    </div>
  );
}

export default ProfilePage;
