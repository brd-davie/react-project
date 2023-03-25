import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginSlider from './LoginSlider';
import eyesvg from './svg/Eye.svg'
import eyeHide from './Icons/eyeHide.png'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
            setError(<p className='text-error animate-shake'>Login failed, check email or password.</p>);
          }
          if (data.status === 'ok') {
            setError(<p className='text-success'>Login Successfully!!</p>);
            const interval = setInterval(() => {
              navigate('/');
              clearInterval(interval);
            }, 2000)
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
      setError(<p className='text-error animate-shake'>Please enter email.</p>);
    }

    if (password === '' || password === null) {
      result = false;
      setError(<p className='text-error animate-shake'>Please enter a password.</p>)
    }

    if ((email === '' || email === null) && (password === '' || password === null)) {
      result = false;
      setError(<p className='text-error animate-shake'>Please enter email and password.</p>);
    }

    return result;
  };

  return (
    <div className="hero bg-black">
      <div className="flex flex-col lg:flex-row w-screen justify-between p-0 ">
        <div className='custom-br h-screen flex flex-col items-center justify-center w-full'>
          <h1 className='text-white text-3xl'>Sign in to your account</h1>
          <form id='form-animation' onSubmit={handleFormSubmit} className="card flex-shrink-0 w-[390px]">
            {error && <div className='text-center text-error mt-5'>{error}</div>}
            <div className="card-body">
              <div className="form-control">
                <label className="label" htmlFor='email '>
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" id='email' placeholder="Email" className="input input-accent input-bordered text-black" value={email}
                  onChange={(event) => setEmail(event.target.value)} />
              </div>
              <div className="form-control">
                <label className="label" htmlFor='password'>
                  <span className="label-text text-white">Password</span>
                </label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} id='password' placeholder="Password" className="input input-accent input-bordered w-full text-black" value={password}
                    onChange={(event) => setPassword(event.target.value)} />
                  <button type="button" className="absolute right-0 h-full w-[40px] shadow-none" onClick={toggleShowPassword}>
                    {showPassword ?
                      <img src={eyesvg} alt="Eye" className='w-[27px] mx-auto' />
                      :
                      <img src={eyeHide} alt="Eye" className='w-[40px] mx-auto ' />
                    }
                  </button>
                </div>
                <label className="mt-4">
                  <Link to='/forgot-password' className="text-white hover:underline">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-3" id='custom-login-border'>
                <button type='submit' onClick={onLogin} className="btn btn-neutral text-white">Sign in</button>
              </div>
              <p className='text-white text-center mt-3'>Don't have an account yet?<Link to='/register' className="text-white text-primary hover:underline ml-2 ">Sign Up</Link></p>
            </div>
          </form>
        </div>
        <div className="hidden lg:block w-full relative">
          <LoginSlider />
        </div>
      </div>
    </div>
  );
};

export default Login
