import React from 'react';
import ReactDOM from 'react-dom/client';
import 'style/index.css';
import { Provider } from 'react-redux';
import store, {persistor} from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={'....Loading'} persistor={persistor}>
        <HashRouter>

          <App />

        </HashRouter>
        
      </PersistGate>
    </Provider>
//  </React.StrictMode>
);

