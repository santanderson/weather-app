import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/index.css'
import { HashRouter } from 'react-router-dom'
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <App store={store} persistor={persistor} />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
