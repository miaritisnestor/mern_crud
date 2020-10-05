import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import PostMessages from './components/PostMessages';
import {store} from './actions/store'

function App() {
  return (
    <Provider store={store}>
      <PostMessages></PostMessages>
    </Provider>
  );
}

export default App;
