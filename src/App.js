import React from 'react';
import './App.css';
import Tabela from './components/Table/Table';
import ProviderContextGlobal from './context/ProviderContextGlobal';

function App() {
  return (
    <ProviderContextGlobal>
      <Tabela />
    </ProviderContextGlobal>
  );
}

export default App;
