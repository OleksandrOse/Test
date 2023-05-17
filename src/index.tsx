import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { ContactInfo } from './pages/ContactInfo';
import { Quantity } from './pages/Quantity';
import { Price } from './pages/Price';
import { Done } from './pages/Done';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<ContactInfo />} />
        <Route path="contact-info" element={<Navigate to="/" replace />} />
        <Route path="quantity" element={<Quantity />} />
        <Route path="price" element={<Price />} />
        <Route path="done" element={<Done/>} />
      </Route>
    </Routes>
  </Router>
  </React.StrictMode>
);
