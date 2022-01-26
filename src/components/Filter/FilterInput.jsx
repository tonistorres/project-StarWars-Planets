import React, { useContext } from 'react';
import ContextGlobal from '../../context/ContextGlobal';

function FilterInputs() {
  // capturando do Provider a função que modifica o estado
  // setFilterName e a função setValuesFilter
  const {
    setFilterName,
    setValuesFilter,
    dropDownColumn,
    dropDownValue,
    dropValue,
    setDropValue,
    numberValue,
    setNumberValue,
    dropColumn,
    setDropColumn,
  } = useContext(ContextGlobal);

  // setando valor digitado no input e guardando estado global
  const handleInput = ({ target }) => {
    setFilterName(target.value);
  };

  const handleClickValue = () => {
    document.querySelector('#name').value = '';
    setFilterName('');
    setValuesFilter([dropColumn, dropValue, numberValue]);

    for (let i = 0; i < dropDownColumn.length; i += 1) {
      if (dropDownColumn[i] === dropColumn) {
        dropDownColumn.splice(i, 1);
      }
    }
  };

  return (
    <div>
      <input
        id="name"
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
