import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './modules/redux/store';
import { RootNavigation } from './modules/navigation/rootNavigation';

const App: FC = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;