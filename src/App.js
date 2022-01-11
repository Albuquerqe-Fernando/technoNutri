import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AppContext } from './util/context';
import Routers from './Routers/Routers';

const App = function () {
  return (
    <BrowserRouter>
      <AppContext>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          theme="dark"
          icon={false}
        />
        <Routers />
      </AppContext>
    </BrowserRouter>
  );
};

export default App;

//home/Notebook/techno-nutri/build
