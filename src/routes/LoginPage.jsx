import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import { Form, Link } from 'react-router-dom';
import Zoro from '../routes/LoginBackground.png';
import Mihawk from '../routes/mihawk.png';
import Luffy from '../routes/Luffy.png';

const LoginPage = () => {
  return (
    <>
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
          {/* <img id='mihawk' src={Mihawk} alt="Anime Background" />
          <img id='luffy' src={Luffy} alt="Anime Background" /> */}
        </Form>
        <div className='cta-link'
          style={{
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Link className="btn btn-accent" to="#" type='submit'>
            Log in
          </Link>
        </div>
      </div>
    </>
  )
}

export default LoginPage