import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(localStorage.getItem("token") || false));
  const [error, setError] = useState('');


  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
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
          console.log("Status", data);
          localStorage.setItem('token', token);
          if (data.status === 'error') {
            setError(data.description);
          }
          if (data.status === 'ok' && user.password) {
            setError(<p className='text-success'>Login Successfully!!</p>);
            navigate('/')
          }
        })
        .catch(() => {
          console.log(error);
        })
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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

    if ((email === '' || email === null) && (password === '' || password === null)) {
      result = false;
      setError('Please enter email and password');
    }

    return result;
  };

  return (
    <div className="hero min-h-screen bg-slate-800">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form id='form-animation' onSubmit={handleFormSubmit} className="card flex-shrink-0 w-[390px] shadow-2xl bg-black">
          {error && <div className='text-error text-center mt-5'>{error}</div>}
          <div className="card-body">
            <div className="form-control">
              <label className="label" htmlFor='email '>
                <span className="label-text text-white">Email</span>
              </label>
              <input type="email" id='email' placeholder="Email" className="input input-accent input-bordered" value={email}
                onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="form-control">
              <label className="label" htmlFor='password'>
                <span className="label-text text-white">Password</span>
              </label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} id='password' placeholder="Password" className="input input-accent input-bordered w-full" value={password}
                  onChange={(event) => setPassword(event.target.value)} />
                <button type="button" className="absolute right-0 text-white w-[60px] btn" onClick={toggleShowPassword}>
                  {showPassword ? <span className="text-white">Hide</span> : <span className="text-white">Show</span>}
                </button>
              </div>
              <label className="mt-4">
                <Link to='/forgot-password' className="text-white hover:underline">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-3">
              <button type='submit' className="btn btn-neutral text-white">Login</button>
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
