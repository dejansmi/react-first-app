import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import State from './State';

ReactDOM.render((
    <BrowserRouter>
      <State />
    </BrowserRouter>
  ), document.getElementById('root'))