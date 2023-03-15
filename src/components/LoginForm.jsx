import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItem } from 'localforage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const ProceedLogin = async (e) => {
    e.preventDefault();

    if (validate()) {
      //login functionality

      const user = {
        email: email,
        password: password,
      };

      await fetch('https://api.hattch.brdsites.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      })
        .then((response) => response.json())
        .then(async (data) => {
          const token = JSON.stringify(data);
          console.log("Success:", data);
          localStorage.setItem('token', token);
        });
    }
  };

  const validate = () => {
    let result = true;

    if (email === '' || email === null) {
      result = false;
      setError('Please enter email');
    }

    if (password === '' || password === null) {
      result = false;
      setError('Please enter password')
    }

    if (email === '' || email === null && password === '' || password === null) {
      result = false;
      setError('Please enter email and password');
    }

    if (result) {
      setIsLoggedIn(true);
    }

    return result;
  };

  return (
    <div className="hero min-h-screen bg-slate-800">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form onSubmit={ProceedLogin} className="card flex-shrink-0 w-[400px] max-w-sm shadow-2xl bg-black">
          {error && <p className='text-error text-center mt-5'>*{error}</p>}
          <div className="card-body">
            <div className="form-control">
              <label className="label" htmlFor='email '>
                <span className="label-text text-white">Email</span>
              </label>
              <input type="email" id='email' placeholder="email" className="input input-accent input-bordered" value={email}
                onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="form-control">
              <label className="label" htmlFor='password'>
                <span className="label-text text-white">Password</span>
              </label>
              <input type="password" id='password' placeholder="password" className="input input-accent input-bordered" value={password}
                onChange={(event) => setPassword(event.target.value)} />
              <label className="mt-4">
                <Link to='' className="text-white hover:underline">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-3">
              <button type='submit' className="btn btn-neutral">Login</button>
            </div>
            <div className="form-control mt-2">
              <Link to='/register' className="btn btn-primary">Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login
