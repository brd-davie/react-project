import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = ({ userData, userStatus, redirectPath = '/login', children }) => {
  const user = userData;
  console.log(user, 'Auth');
  if (!userData && userStatus !== 'ok') {
    return <Navigate to='/login' />
  }
  return children ? children : <Outlet />
}

export default PrivateRoutes

// import React, { useEffect, useState } from 'react';
// import { Navigate, Outlet, useNavigate } from 'react-router-dom';


// export default function PrivateRoutes() {
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(true);

  // const checkAuthentication = async () => {

  //   try {
  //     const token = JSON.parse(localStorage.token);
  //     const response = await fetch('https://api.hattch.brdsites.com/api/v1/auth/me', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + token.access_token,
  //       },
  //     });
  //     const data = await response.json();
  //     console.log(response)
  //     console.log('Response:', data);
  //     localStorage.setItem('user', JSON.stringify(data));
  //     if (response.status === 'ok') {
  //       console.log('Valid!');
  //       setIsAuthenticated(true);
  //       navigate('/')
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

//   useEffect(() => {
//     checkAuthentication();
//   }, []);

//   return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
// };
