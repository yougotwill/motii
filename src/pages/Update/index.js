import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Update = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    const promises = [];
    setLoading(true);
    setError('');

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises).then(() => {
      history.push('/');
    }).catch((err) => {
      setError('Failed to update account');
      console.error(err);
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className='update'>
      {error &&
        <h2 className='banner'>{error}! <span role='img' aria-label='police light'>🚨</span></h2>
      }
      <form onSubmit={handleSubmit}>
        <fieldset className='border'>
          <legend>Update Account</legend>
          <div className='details'>
            <div id='email'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' ref={emailRef} defaultValue={currentUser.email} required />
            </div>
            <div id='password'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' ref={passwordRef} placeholder="Blank means don't change" />
            </div>
            <div id='password-confirm'>
              <label htmlFor='password-confirm'>Password Confirmation</label>
              <input type='password' name='password-confirm' ref={passwordConfirmRef} placeholder="Blank means don't change" />
            </div>
            <input type='submit' value='Update' disabled={loading}/>
            <Link to='/'>Cancel</Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Update;
