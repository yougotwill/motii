import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import './styles/App.scss';

import { AuthProvider } from './contexts/AuthContext';
import { ConfigProvider } from './contexts/ConfigContext';

import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Main from './pages/Main';
import Privacy from './pages/Privacy';
import Account from './pages/Account';
import Update from './pages/Update';
import Settings from './pages/Settings';

import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const HeaderWithRouter = withRouter(Header);

  return (
    <BrowserRouter>
      <AuthProvider>
        <ConfigProvider>
          <div className='app'>
            <HeaderWithRouter />
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/signup'>
                <Signup />
              </Route>
              <Route path='/forgot-password'>
                <ForgotPassword />
              </Route>
              <Route path='/privacy'>
                <Privacy />
              </Route>
              <PrivateRoute path='/account'>
                <Account />
              </PrivateRoute>
              <PrivateRoute path='/update'>
                <Update />
              </PrivateRoute>
              <Route path='/settings'>
                <Settings />
              </Route>
              <Route path='/'>
                <Main />
              </Route>
            </Switch>
            <Footer />
          </div>
        </ConfigProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
