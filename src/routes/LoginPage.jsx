import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import { Form, Link } from 'react-router-dom';
import Background from '../routes/LoginBackground.png';
import Mihawk from '../routes/mihawk.png';
import Luffy from '../routes/Luffy.png';

const LoginPage = () => {
  return (
    <div>
      <div className='form-container'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          width: '100%',
          background: '#47a55f',
          position:'relative',
        }}
      >
        <h2 className='header'
          style={{
            textAlign: 'center',
            margin: '0',
            color: '#fff'
          }}
        >Log In</h2>
        <Form className='form'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            rowGap: '20px',
            width: '100%',
            maxWidth: '70%',
            margin: '0 auto',
            paddingBottom: '50px',
            paddingTop: '30px',

          }}
        >
        <input placeholder='Username'
          style={{
            alignSelf: 'center',
            width: '30%'
          }}
        />
        <input type='password' placeholder='Password'
          style={{
            alignSelf: 'center',
            width: '30%'

          }}
        />
        <img src={Background} alt="Anime Background" 
          style={{
            backgroundSize: '30%',
            backgroundSize: 'contain',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            right: '20%',
            width: '15%',
          }}
        />
        <img src={Mihawk} alt="Anime Background" 
          style={{
            backgroundSize: '30%',
            backgroundSize: 'contain',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: '20%',
            left: '20%',
            width: '10%',
          }}
        />
         <img src={Luffy} alt="Anime Background" 
          style={{
            backgroundSize: '10%',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            bottom: '20%',
            left: '20%',
            width: '10%',
          }}
        />
        </Form>
        <div className='cta-link'
          style={{
            width: '100%',
            textAlign: 'center',
          }}
        >
        <Link to="#" type='submit'
          style={{
            padding: '10px 30px',
            background: '#141414',
            borderRadius: '10px',
            textDecoration: 'none',
            color: '#fff'
          }}
        >
          Log in
        </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage