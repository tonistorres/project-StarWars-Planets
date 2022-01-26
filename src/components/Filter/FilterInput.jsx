import React, { useContext } from 'react';
import ContextGlobal from '../../context/ContextGlobal';

function FilterInput() {
  // vamos pegar do Contexto a minha função que modifica
  // o estado do meu filterName para isso iremos fazer
  // o destructuring
  const { setFilterName } = useContext(ContextGlobal);

  const handleInput = ({ target }) => {
    // nesse ponto pego a função que escreve no meu estado global
    // e seto o que estou escrevendo no componente input
    setFilterName(target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        data-testid="name-filter"
        onChange={ (evt) => handleInput(evt) }
      />
    </div>
  );
}

export default FilterInput;
