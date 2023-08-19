import React from 'react';
import { AppProviders } from './providers/AppProviders';
import { Router } from './routers/Router';

const App = () => {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  );
};

export default App;
