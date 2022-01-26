import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchPlanetsData } from '../service/ConsumerAPI';
import ContextGlobal from './ContextGlobal';

function ProviderContextGlobal({ children }) {
  const [data, setData] = useState([]);
  // criado um estado global para name a ser digitado no input
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    async function searchAPI() {
      const dataAPI = await fetchPlanetsData();
      setData(dataAPI);
    }
    searchAPI();
  }, []);

  return (
    <ContextGlobal.Provider value={ { setFilterName, data, filterName } }>
      {children}
    </ContextGlobal.Provider>
  );
}

ProviderContextGlobal.propTypes = {
  chidlren: PropTypes.node,
}.isRequired;

export default ProviderContextGlobal;
