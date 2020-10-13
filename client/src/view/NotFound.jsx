import React from 'react';
import HeaderSection from '../components/HeaderSection'

export const NotFound = (props) =>{

console.log('--props.history-', props.history)
    return(
        <>
            <HeaderSection 
                title='404' 
                description='Página no encontrada' 
            />
            <button onClick={ () => props.history.push('/tareas') } >Ir a todas las  tareas</button>
        </>
    )

}

// export default NotFound;
