// // ********************************** */
// // Contribuição: Israel Santana
// // Referencia: https://github.com/tryber/sd-016-b-project-starwars-planets-search/pull/53/commits/a7601f80d56062fdcf1829322b32c896043d7675
// // **************************************/
export const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const fetchPlanetsData = async () => {
  // fazendo requisição a API utilizando a constante URL... a cima definida
  const response = await fetch(API_URL);
  // limpando e convertendo a promisse em um objeto javaScript
  const data = await response.json();
  // do resultado capturado da api estou desestruturando a crave results
  // de todo objeto vindo da api
  const { results } = data;
  // percorrendo o array de objetos results e utilizando o operador delete para
  // excluir a chave do objeto residents
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
  results.forEach((item) => delete item.residents);
  return results;
};
