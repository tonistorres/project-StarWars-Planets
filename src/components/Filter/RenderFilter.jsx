import React, { useContext } from 'react';
import ContextGlobal from '../../context/ContextGlobal';

function renderComponentFilter() {
  const { valuesFilter } = useContext(ContextGlobal);
  return (
    <div>
      {valuesFilter.map((value) => <option key={ value }>{ value }</option>)}
    </div>
  );
}

export default renderComponentFilter;
