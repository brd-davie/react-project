import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new user object
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirmation: password
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
        console.log("Success:", data);
        if (data.status.ok) {
          localStorage.setItem('token', token);
        }
        if (data.status.ok) {
          setMessage('Successfully Registered!');
        }
      })
      // .then((res) => {
      //   console.log(res, 'registration get token')

      // setMessage('Registered Successfully!');
      // console.log(res, 'register response');
      // navigate('/login');
      // })
      .catch((err) => {
        setMessage('Fail to Register' + err.message)
      })
    if (password.length < 8) {
      setMessage('Password must be more than we 8 characters');
    }
    if (password !== confirmPassword) {
      setMessage('Password do not match!');
    }
  };

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <form onSubmit={handleSubmit} className='w-[400px] z-10 p-5 rounded-lg bg-neutral'>
        {message && <p className='text-accent text-center my-4 '>{message}</p>}
        <div className='flex flex-col mb-2'>
          <label htmlFor="first_name" className='text-accent mb-2'>First Name:</label>
          <input className='input input-accent' type="text" id="first_name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor="last_name" className='text-accent mb-2'>Last Name:</label>
          <input className='input input-accent' type="text" id="last_name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor="email" className='text-accent mb-2'>Email:</label>
          <input className='input input-accent' type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor="password" className='text-accent mb-2'>Password:</label>
          <input className='input input-accent' type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor="confirm_password" className='text-accent mb-2'>Confirm Password:</label>
          <input className='input input-accent' type="password" id="confirm_password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </div>
        <button type="submit" className='btn btn-md btn-accent w-full mt-5'>Register</button>
      </form>
    </div>
  );

}

export default RegistrationForm;
