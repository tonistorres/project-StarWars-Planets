import React from 'react';
import './App.css';
import Tabela from './components/Table/Table';
import FilterInput from './components/Filter/FilterInput';
import ProviderContextGlobal from './context/ProviderContextGlobal';

function App() {
  return (
    <ProviderContextGlobal>
      <FilterInput />
      <Tabela />
    </ProviderContextGlobal>
  );
}

export default App;
