import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginSlider from './LoginSlider'
import { Link } from 'react-router-dom';
import eyesvg from './svg/Eye.svg'
import eyeHide from './Icons/eyeHide.png'

function RegistrationForm() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordx, setShowPasswordx] = useState(false);



  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    const validateEmail = (email) => {
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    }

    // if (name === 'email') {
    //   if (validateEmail(value)) {
    //   } else {
    //     setEmailError('Please enter a valid email address');
    //   }
    // }

    setEmail(value);

    if (validateEmail(email)) {
      // Submit form
    } else {
      setEmailError('Please enter a valid email address');
    }

    // Create a new user object
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirmation: confirmPassword,
    };
    console.log(newUser);

    // Send the user data to the server
    fetch('https://api.hattch.brdsites.com/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then((response) => response.json())
      .then((data) => {
        const token = data;
        console.log("Status:", data);
        if (data.status === 'ok') {
          <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box custom-modal bg-black">
                <h3 className="font-bold text-lg">{message}</h3>
                <div className="modal-action">
                  <Link to='/login' htmlFor="my-modal" className="btn btn-sm btn-primary">Login</Link>
                </div>
              </div>
            </div>
          </div>
          setMessage(<span className='text-success'>Registered Successfully!</span>)
          localStorage.setItem('token', token);
          const interval = setInterval(() => {
            navigate('/login');
            clearInterval(interval);
          }, 1500)
        }

        if (data.status === 'error') {
          setMessage(<span className='text-error'>Register Failed!</span>)
          localStorage.setItem('token', token);
        }
      })
      .catch((err) => {
        setMessage('Fail to Register' + err.message)
      })

    if (password.length < 8 && confirmPassword < 8) {
      setMessage('Password must be more than we 8 characters');
    }
    if (password !== confirmPassword) {
      setMessage(<span className='text-error text-center'>Password do not match!</span>);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordx = () => {
    setShowPasswordx(!showPasswordx);
  };

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='custom-br w-full h-screen flex flex-col items-center justify-center bg-black'>
        <h1 className='text-white text-3xl'>Sign up your new account</h1>
        <form onSubmit={handleSubmit} className='w-[400px] z-10 p-5 rounded-lg bg-black mt-3'>
          {message && <p className='text-error text-center my-4 '>{message} {emailError}</p>}
          <div className='flex flex-col mb-2'>
            <label htmlFor="first_name" className='text-white mb-2'>First Name:</label>
            <input className='input input-accent' type="text" id="first_name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
          </div>
          <div className='flex flex-col mb-2'>
            <label htmlFor="last_name" className='text-white mb-2'>Last Name:</label>
            <input className='input input-accent' type="text" id="last_name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
          </div>
          <div className='flex flex-col mb-2'>
            <label htmlFor="email" className='text-white mb-2'>Email:</label>
            <input className='input input-accent' type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className='flex flex-col mb-2'>
            <label htmlFor="password" className='text-white mb-2'>Password:</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} id='password' className="input input-accent input-bordered w-full" value={password} onChange={(event) => setPassword(event.target.value)} />
              <button type="button" className="absolute right-0 h-full w-[40px] shadow-none" onClick={toggleShowPassword}>
                {showPassword ?
                  <img src={eyesvg} alt="Eye" className='w-[27px] mx-auto' />
                  :
                  <img src={eyeHide} alt="Eye" className='w-[40px] mx-auto' />
                }
              </button>
            </div>
          </div>
          <div className='flex flex-col mb-2'>
            <label htmlFor="confirm_password" className='text-white mb-2'>Confirm Password:</label>
            <div className="relative">
              <input type={showPasswordx ? 'text' : 'password'} id='password-confirmation' className="input input-accent input-bordered w-full" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
              <button type="button" className="absolute right-0 h-full w-[40px] shadow-none" onClick={toggleShowPasswordx}>
                {showPasswordx ?
                  <img src={eyesvg} alt="Eye" className='w-[27px] mx-auto' />
                  :
                  <img src={eyeHide} alt="Eye" className='w-[40px] mx-auto' />
                }
              </button>
            </div>
          </div>
          <div className='custom-register-bt mt-5'>
            <label onClick={handleSubmit} type='submit' htmlFor='my-modal' className='btn btn-md btn-neutral w-full mt-5'>Register</label>
          </div>
        </form>
      </div>
      <div className="hidden lg:block w-full relative">
        <LoginSlider />
      </div>
    </div>
  );

}

export default RegistrationForm;
