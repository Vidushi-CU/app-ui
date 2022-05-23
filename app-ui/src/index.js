import React from 'react';
import ReactDOM from 'react-dom/client';
import Component1 from './Component1';
import Component2 from './Component2';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Component1 />
    <Component2 />
  </>
);
