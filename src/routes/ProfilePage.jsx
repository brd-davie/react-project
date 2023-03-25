import React, { useEffect, useState } from "react";
import Nav from '../components/Nav'

function ProfilePage() {

  return (
    <div className="">
      <Nav />
      <div className="pt-[70px] max-w-[1250px] mx-auto">
        <h2 className="text-white opacity-[.6] text-4xl">Profile Page</h2>
        <p className="text-3xl">Test</p>
      </div>
    </div>
  );
}

export default ProfilePage;
