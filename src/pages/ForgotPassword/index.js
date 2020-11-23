import React, { useState, useRef }from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ForgotPassword = () => {
  const emailRef = useRef();

  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch(err) {
      setError('Failed to reset password');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className='forgot-password'>
       {error &&
        <h2 className='banner'>{error}! <span role='img' aria-label='police light'>🚨</span></h2>
      }
     {message &&
        <h2 className='banner'>{message}! <span role='img' aria-label='incoming envelope'>📨</span></h2>
      }
      <form onSubmit={handleSubmit}>
        <fieldset className='border'>
          <legend>Forgot Password</legend>
          <div className='details'>
            <div id='email'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' ref={emailRef} required />
            </div>
            <input type='submit' value='Reset Password' disabled={loading} />
            <Link to='/login'>Back to Login</Link>
            <p>Don't have an account yet? <Link to='/signup'>Sign Up</Link></p>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ForgotPassword;
