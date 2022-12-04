import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { AuthContextProvider } from './context/AuthContext'
import { UserContextProvider } from './context/UserContext'
import { GradientContextProvider } from './context/GradientContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <GradientContextProvider>
          <App />
        </GradientContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)

reportWebVitals();
