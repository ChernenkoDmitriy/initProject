import React, { FC, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './modules/redux/store';
import { RootNavigation } from './modules/navigation/rootNavigation';
import { LocalizationContextProvider } from './i18n/indes';
import IConnection from './modules/connection';

const App: FC = () => {
  IConnection.connect('ws://10.1.135.71:6503', 'json');

  return (
    <Provider store={store}>
      <LocalizationContextProvider>
        <RootNavigation />
      </LocalizationContextProvider>
    </Provider>
  );
}

export default App;