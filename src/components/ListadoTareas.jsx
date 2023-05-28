import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListadoTareas = ({tareas}) => {
    let tareass = [];
    tareass = tareas;
    console.log(tareass)

    const listado = tareass.map(tarea=> <ItemTarea tarea={tarea}/>);

    return (
        <ListGroup className='mt-3'>
            {listado}
        </ListGroup>
    );
};

export default ListadoTareas;