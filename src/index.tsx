import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';
import RecoilizeDebugger from 'recoilize';

const root = document.getElementById('root')

ReactDOM.render(
  <RecoilRoot>
    <RecoilizeDebugger />
    <App />
  </RecoilRoot>,
  root
);
