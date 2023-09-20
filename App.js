import React from 'react';
import StackNav from './src/navigation/StackNav';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <StackNav />
    </Provider>
  );
};

export default App;
