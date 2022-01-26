import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchPlanetsData } from '../service/ConsumerAPI';
import ContextGlobal from './ContextGlobal';

function ProviderContextGlobal({ children }) {
  // criando estados globais da aplicação
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [valuesFilter, setValuesFilter] = useState([]);
  const [dropDownColumn, setDropDownColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [dropDownValue, setDropDownValue] = useState([
    'maior que',
    'menor que',
    'igual a']);

  const [dropColumn, setDropColumn] = useState('population');
  const [dropValue, setDropValue] = useState('maior que');
  const [numberValue, setNumberValue] = useState(0);

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
        dropDownColumn,
        setDropDownColumn,
        dropDownValue,
        setDropDownValue,
        dropColumn,
        setDropColumn,
        dropValue,
        setDropValue,
        numberValue,
        setNumberValue,
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
