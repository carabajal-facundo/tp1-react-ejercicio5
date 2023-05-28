import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListadoTareas = () => {
    let tareas = localStorage.getItem('listaTareas');
    if(!tareas) tareas=[];
    else{
        tareas = JSON.parse(tareas).map((tarea)=>tarea);
    }

    const listado = tareas.map(tarea => <ItemTarea tarea={tarea}/>);

    return (
        <ListGroup className='mt-3'>
            {listado}
        </ListGroup>
    );
};

export default ListadoTareas;