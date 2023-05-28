import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const ItemTarea = ({tarea}) => {
    let tareas = localStorage.getItem('listaTareas');
    if(!tareas) tareas=[];
    else{
        tareas = JSON.parse(tareas).map((tarea)=>tarea);
    }

    function borrarDelLocalStorage() {
        let indice = tareas.findIndex((tareaa)=>tareaa===tarea);
        tareas.slice(indice, 1);
        localStorage.setItem('listaTareas', JSON.stringify(tareas));
    }

    return (
        <>
        <ListGroup.Item className='d-flex justify-content-between'>
            {tarea}
            <Button variant='danger' onClick={borrarDelLocalStorage}>Borrar</Button>
        </ListGroup.Item>
        </>
    );
};

export default ItemTarea;