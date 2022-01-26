import React, { useContext, useState } from 'react';
import ContextGlobal from '../../context/ContextGlobal';

const dropDownColumn = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

const dropDownValue = ['maior que', 'menor que', 'igual a'];

function FilterInputs() {
  // criando estados locais
  const [dropColumn, setDropColumn] = useState('population');
  const [dropValue, setDropValue] = useState('maior que');
  const [numberValue, setNumberValue] = useState(0);

  // capturando do Provider a função que modifica o estado
  // setFilterName e a função setValuesFilter
  const { setFilterName, setValuesFilter } = useContext(ContextGlobal);

  // setando valor digitado no input e guardando estado global
  const handleInput = ({ target }) => {
    setFilterName(target.value);
  };

  const handleClickValue = () => {
    setValuesFilter([dropColumn, dropValue, numberValue]);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        data-testid="name-filter"
        onChange={ (evt) => handleInput(evt) }
      />

      <select
        onChange={ ({ target }) => setDropColumn(target.value) }
        data-testid="column-filter"
      >
        {dropDownColumn.map((value) => <option key={ value }>{ value }</option>)}
      </select>

      <select
        onChange={ ({ target }) => setDropValue(target.value) }
        data-testid="comparison-filter"
      >
        {dropDownValue.map((value) => <option key={ value }>{ value }</option>)}
      </select>

      <input
        type="number"
        value={ numberValue }
        data-testid="value-filter"
        onChange={ ({ target }) => setNumberValue(target.value) }

      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickValue }
      >
        Filtrar

      </button>

    </div>
  );
}

export default FilterInputs;
