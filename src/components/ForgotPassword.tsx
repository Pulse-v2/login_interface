import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import './forgotPassword.scss';
import { useResetPass } from '../hooks/useResetPass.ts';

const ForgotPassword = () => {
  const { data, resetPass } = useResetPass();
  const [credentials, setCredentials] = useState({ email: '' });
  const [error, setError] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(credentials.email)) {
        setError(true);
        console.log('error mail')
        return;
    } else {
        try {
          await resetPass(credentials);
          console.log('Request succesed:', data);
        } catch (error) {
          setError(true);
          console.error(error.message);
        }
        return;
    }
  };
  return (
    <>
      <div className='forgot-container'>
        <div className='forgot-container_logo'>
            <img src={logo} alt="logo" />
        </div>
          <div className='forgot-container_title'>Forgot password</div>
        <div className='forgot-container_form'>
          <form onSubmit={handleSubmit}>
              <input className={error ? 'alert' : ''} type="text" name='email' value={credentials.email} onChange={handleChange} placeholder='Enter your email'  />
              <button type="submit">Send</button>
              <button type='button' onClick={() => goBack()}>Cancel</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword