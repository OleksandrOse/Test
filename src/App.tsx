import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStateProvider } from './utils/GlobalStateProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const App: React.FC = () => {
  return (
    <GlobalStateProvider>
      <div className="App">
        <Outlet />
      </div >
    </GlobalStateProvider>
  );
}
