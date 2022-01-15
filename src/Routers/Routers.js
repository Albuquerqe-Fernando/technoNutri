import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Erro404 from '../pages/404';
import Gain from '../pages/Gain';
import Slimming from '../pages/slimming';
import Result from '../pages/Result';
import Private from '../pages/Private';
import Myroute from './Myroute';

const Routers = function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gain-weight" element={<Gain />} />
      <Route path="/slimming" element={<Slimming />} />
      <Route
        path="/result"
        element={
          <Myroute>
            <Result />
          </Myroute>
        }
      />
      <Route path="/privat" element={<Private />} />
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
};

export default Routers;
