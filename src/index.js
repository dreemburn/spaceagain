import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoadingProvider from "./context/LoadingProvider";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <BrowserRouter>
    <App />
  </BrowserRouter>
    </LoadingProvider>
  </React.StrictMode>
);

