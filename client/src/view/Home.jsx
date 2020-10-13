import React from 'react';
import HeaderSection from '../components/HeaderSection/index'
import PokemonsList from '../components/PokemonsList';
export const Home = () =>{

    return(
        <>
            <HeaderSection 
                title='Listado de pokemones' 
                description='Seleccione sus pokemones favoritos' 
                view=''
            />
            <PokemonsList/>
        </>
    )

}

// export default Home;