import React from 'react';
import { Provider } from "react-redux";

import store from './store';
import ContainerApp from './components/ContainerApp';

function App() {

  return (
    <Provider store={store}>
      <ContainerApp />
    </Provider>
  );
}

export default App;
