//import Link from 'next/link';
import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import './styles/style.scss';
//import * as serviceworker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,  
  document.getElementById('root')
);
