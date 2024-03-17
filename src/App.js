// App.js
import React from 'react';
import CartList from './components/CartList';
import Total from './components/Total';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <CartList />
          <Total />
        </div>
      </Provider>
  );
}

export default App;
