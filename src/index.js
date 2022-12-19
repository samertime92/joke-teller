import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FavouriteJokesProvider } from './context/FavouriteJokesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavouriteJokesProvider>
    <App />
    </FavouriteJokesProvider>
  </React.StrictMode>
);

