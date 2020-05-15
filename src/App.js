import React, { useState } from 'react';

import './styles/App.scss';

import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Main from './components/Main/Main.js';

const App = (props) => {
  const [route, setRoute] = useState();

  return (
    <div className='app'>
      {(() => {
        switch(route) {
          case 'login':
            return <Login />;
          case 'register':
            return <Register />
          default:
            return <Main />
        }
      })()}
    </div>
  );
};

export default App;
