import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';


export default function PrivateRoutes() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthentication = async () => {

    try {
      const token = JSON.parse(localStorage.token);
      const response = await fetch('https://api.hattch.brdsites.com/api/v1/auth/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token.access_token,
        },
      });
      const data = await response.json();
      console.log(response)
      console.log('Response:', data);
      localStorage.setItem('user', JSON.stringify(data));
      if (response.status.ok) {
        setIsAuthenticated(true);
        console.log("True", response)
        // return true
      }
      // else {
      //   return false
      // }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

