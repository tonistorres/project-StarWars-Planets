import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchPlanetsData } from '../service/ConsumerAPI';
import ContextGlobal from './ContextGlobal';

function ProviderContextGlobal({ children }) {
  // criando estados globais da aplicação
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [valuesFilter, setValuesFilter] = useState([]);

  // Usando useEffect com comportamento de componentDidMount
  // para fazer requisição a API
  useEffect(() => {
    async function searchAPI() {
      const dataAPI = await fetchPlanetsData();
      setData(dataAPI);
    }
    searchAPI();
  }, []);

  // console.log('Dados vindo API:', data);
  // console.log('Nome Filtrado Input Filter:', filterName);
  // console.log('Valores guardados dos Filtros', valuesFilter);

  return (
    <ContextGlobal.Provider
      value={ {
        data,
        filterName,
        setFilterName,
        valuesFilter,
        setValuesFilter,
      } }
    >
      {children}
    </ContextGlobal.Provider>
  );
}

ProviderContextGlobal.propTypes = {
  chidlren: PropTypes.node,
}.isRequired;

export default ProviderContextGlobal;
