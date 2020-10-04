import React from 'react';

const Login = () => {
  return (
    <div className='login'>
      <h2 className='banner'>Under construction! <span role='img' aria-label='road block'>🚧</span></h2>
      <form className='disabled'>
        <fieldset className='border'>
          <legend>Login</legend>
          <div className='details'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' />
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' />
            <input type='submit' value='Login' />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
