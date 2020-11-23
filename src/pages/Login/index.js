import React, { useState, useRef }from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch(err) {
      setError('Failed to login');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className='login'>
      {error &&
        <h2 className='banner'>{error}! <span role='img' aria-label='police light'>🚨</span></h2>
      }
      <form onSubmit={handleSubmit}>
        <fieldset className='border'>
          <legend>Login</legend>
          <div className='details'>
            <div id='email'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' ref={emailRef} required />
            </div>
            <div id='password'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' ref={passwordRef} required />
            </div>
            <input type='submit' value='Login' disabled={loading} />
            <p>Don't have an account yet? <Link to='/signup'>Sign Up</Link></p>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
