import React from 'react';

const Login = () => {
  return (
    <div className='login'>
      <form>
        <fieldset className='border'>
          <legend>Login</legend>
          <label htmlFor='email'>Email</label><br />
          <input type='text' name='email' /><br />
          <label htmlFor='password'>Password</label><br />
          <input type='password' name='password' /><br />
          <input type='submit' value='Login' />
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
