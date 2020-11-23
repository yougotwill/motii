import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute = ({ children, ...args }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...args}
      render={() => {
        return currentUser ?
          <>{children}</>
          : <Redirect to='/login' />
      }}>
    </Route>
  );
};

export default PrivateRoute;
