import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
  const toggleModal = (modalState, modalHandler) => {
    modalHandler(!modalState);
  };

  const HeaderWithRouter = withRouter(Header);

  return (
    <BrowserRouter>
      <ConfigProvider>
        <AuthProvider>
          <div className='app'>
            <HeaderWithRouter />
            <Switch>
              <Route path='/login'>
                <Helmet>
                  <title>motii - login</title>
                </Helmet>
                <Login />
              </Route>
              <Route path='/signup'>
                <Helmet>
                  <title>motii - signup</title>
                </Helmet>
                <Signup />
              </Route>
              <Route path='/forgot-password'>
                <Helmet>
                  <title>motii - password</title>
                </Helmet>
                <ForgotPassword />
              </Route>
              <Route path='/privacy'>
                  <Helmet>
                  <title>motii - privacy</title>
                </Helmet>
                <Privacy />
              </Route>
              <PrivateRoute path='/account'>
                <>
                  <Helmet>
                    <title>motii - account</title>
                  </Helmet>
                  <Account />
                </>
              </PrivateRoute>
              <PrivateRoute path='/update'>
                <>
                  <Helmet>
                    <title>motii - update</title>
                  </Helmet>
                  <Update />
                </>
              </PrivateRoute>
              <Route path='/settings'>
                <>
                  <Helmet>
                    <title>motii - settings</title>
                  </Helmet>
                  <Settings />
                </>
              </Route>
              <Route path='/'>
                <>
                  <Helmet>
                    <title>motii</title>
                  </Helmet>
                  <Main handleModal={toggleModal} />
                </>
              </Route>
            </Switch>
            <Footer />
          </div>
        </AuthProvider>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
