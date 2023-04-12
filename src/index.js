import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import {NetflixRegisterComponent} from './components/NetflixRegisterComponent';
import NetflixIndexComponent  from './components/NetflixIndexComponent';
import reportWebVitals from './reportWebVitals';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import DataBindingComponent from './components/DataBindingComponent';
import ShoppingComponent from './components/ShoppingComponent';
import EventBindingComponent from './components/EventBindingComponent';
import TwoWayBinding from './components/TwoWayBinding';
import TwoWayClassDemo from './components/TwoWayClassDemo';
import ShoppingClassDemo from './components/ShoppingClassDemo';
import FormComponent from './components/FormComponent';
import FormikDemo from './components/FormikDemo';
import FormikValidation from './components/FormikValidation';
import YupValidation from './components/YupValidation';
import LifeCycleDemo from './components/LifeCycleDemo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LifeCycleDemo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
