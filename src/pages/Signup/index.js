import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push('/');
    } catch(err) {
      setError('Failed to set an account');
      console.error(err);
    }
  };

  return (
    <div className='signup'>
      {error &&
        <h2 className='banner'>{error}! <span role='img' aria-label='police light'>🚨</span></h2>
      }
      <form onSubmit={handleSubmit}>
        <fieldset className='border'>
          <legend>Sign Up</legend>
          <div className='details'>
            <div id='email'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' ref={emailRef} required />
            </div>
            <div id='password'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' ref={passwordRef} required />
            </div>
            <div id='password-confirm'>
              <label htmlFor='password-confirm'>Password Confirmation</label>
              <input type='password' name='password-confirm' ref={passwordConfirmRef} required />
            </div>
            <input type='submit' value='Sign Up' disabled={loading}/>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Signup;
