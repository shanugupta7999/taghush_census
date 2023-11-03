import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<App/>}>
      </Route>
    </Routes>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}>
      </Route>
    </Routes>
   
    </BrowserRouter>
  </React.StrictMode>
);
