import React from 'react';
import Avatar from 'react-avatar';
import { useState } from 'react';
import { useEffect } from 'react';

const MyAvatar = () => {

  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
}, [])

  return (
   <>
    {
      user ? (
        <Avatar name={`${user.first_name} ${user.last_name}`} size="50" round={true} fgColor='#fff' color='#FFFFFF00'/>
      ): (
        <Avatar name="Name Name" size="50" round={true} fgColor='#fff' color='#FFFFFF00' />
      )
    }
  </>
  );

}


export default MyAvatar;

