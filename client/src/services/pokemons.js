import { request } from "../utils/request";
import { POKEMONS, POKEMON_DETAIL } from "../utils/endpoints";

/*PARA OBTENER LOS PRIMEROS 20 POKEMONES*/
export function fetchPokemons() {
  return request(POKEMONS);
}
/*PARA OBTENER DETALLE POKEMON POR NOMBRE*/
export function fetchPokemonDetail(pokemonName) {
  return request(POKEMON_DETAIL(pokemonName));
}
