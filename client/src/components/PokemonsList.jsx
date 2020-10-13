import React, { useState, useEffect } from "react";
import { fetchPokemons } from "../services/pokemons.js";

import { Row } from 'react-bootstrap';
import Pokemon from './Pokemon';
const PokemonsList = () =>{

    const [pokemonList, setpokemonList] = useState([]);

    useEffect(() => {

        fetchPokemons().then((res) => {
            setpokemonList([...res.data.results]);
        });

    }, []);

    return(
        
        <Row>
            {pokemonList.map(({ name }) => (
                <Pokemon key={name} find={name} />
            ))}
        </Row>

    )

}

export default PokemonsList