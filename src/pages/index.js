//import Link from 'next/link';
import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import { router } from '../router';
import { RouterProvider } from 'react-router-dom';
import * as serviceworker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,  
  document.getElementById('root')
);
serviceworker.unregister();

//export default function Start(){

  //  <div>
    //    <ul>
      //      <li>
              //  <Link href='/'> Home </Link>
           // </li>
           // <li>
              //  <Link href='/contact'> contact </Link>
          //  </li>
          //  <li>
           //     <Link href='/Knowledge'> Knowledge </Link>
         //   </li>
         //       <Link href='/Portfolio'> porfolio </Link>
         //   <li>
          //      <Link href='/NotFound'> NotFound </Link>
          //  </li>
      //  </ul>
 // </div>
//}