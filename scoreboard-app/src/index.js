import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  ScoreContext  from './Contexts/ScoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ScoreContext>
    <App />
  </ScoreContext>
);
