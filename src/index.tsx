import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<App />} />
        <Route path="contact-info" element={<Navigate to="/" replace />} />
        <Route path="quantity" element={<App />} />
        <Route path="price" element={<App />} />
        <Route path="done" element={<App/>} />
      </Route>
    </Routes>
  </Router>
  </React.StrictMode>
);
