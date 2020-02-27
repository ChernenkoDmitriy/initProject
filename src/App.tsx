import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './modules/redux/store';
import { RootNavigation } from './modules/navigation/rootNavigation';
import { LocalizationContextProvider } from './i18n/indes';

const App: FC = () => {
  return (
    <Provider store={store}>
      <LocalizationContextProvider>
        <RootNavigation />
      </LocalizationContextProvider>
    </Provider>
  );
}

export default App;