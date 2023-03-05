import React from 'react'
import { Form, Link } from 'react-router-dom';
import Zoro from '../routes/images/LoginBackground.png';
import Nav from './Nav';

const LoginPage = () => {
  return (
    <>
      <Nav />
      <div id='form-container'>
        <h2 className='header'
          style={{
            textAlign: 'center',
            margin: '0',
            color: '#111',
            fontSize: '28px'
          }}
        >Log In</h2>
        <Form id='form'>
          <input className="input input-bordered input-success w-full max-w-xs bg-white dark:bg-black" placeholder='Username'
            style={{
              alignSelf: 'center',
              width: '50%',
            }}
          />
          <input className="input input-bordered input-success w-full max-w-xs bg-white dark:bg-black" type='password' placeholder='Password'
            style={{
              alignSelf: 'center',
              width: '50%',

            }}
          />
          <img id='zoro' src={Zoro} alt="Anime Background" />
        </Form>
        <div className='cta-link'
          style={{
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Link className="btn btn-sm btn-accent" to="#" type='submit'>
            Log in
          </Link>
          <Link className="btn btn-sm ml-5" to="/" type='submit'>
            Back
          </Link>
        </div>
      </div>
    </>
  )
}

export default LoginPage