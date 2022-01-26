import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import ContextGlobal from '../../context/ContextGlobal';

function Tabela() {
  const { filterName, data } = useContext(ContextGlobal);
  let arrayPlanets = data;

  if (filterName !== '') {
    arrayPlanets = data.filter((value) => value.name
      .toLowerCase().includes(filterName.toLowerCase()));
  }

  if (arrayPlanets.length === 0) {
    return <h1>Loading ...</h1>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>

        {arrayPlanets.map((item, index) => (
          <tr key={ index }>
            <td>{item.name}</td>
            <td>{item.rotation_period}</td>
            <td>{item.orbital_period}</td>
            <td>{item.diameter}</td>
            <td>{item.climate}</td>
            <td>{item.gravity}</td>
            <td>{item.terrain}</td>
            <td>{item.surface_water}</td>
            <td>{item.population}</td>
            <td>{item.films}</td>
            <td>{item.created}</td>
            <td>{item.edited}</td>
            <td>{item.url}</td>
          </tr>

        ))}
      </tbody>
    </table>
  );
}

Tabela.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

export default Tabela;
