import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store/persistStore';
import { store } from 'redux/store/store';
import { ToastContainer } from 'react-toastify';

import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);
