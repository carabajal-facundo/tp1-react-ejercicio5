import { Button, Form } from 'react-bootstrap';
import ListadoTareas from './ListadoTareas';
import { useState } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('');
    let tareas = localStorage.getItem('listaTareas');
    if(!tareas) tareas=[];
    else{
        tareas = JSON.parse(tareas).map((tarea)=>tarea);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        tareas.push(tarea);
        localStorage.setItem('listaTareas', JSON.stringify(tareas));
        setTarea('');

    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="tarea">
                <Form.Control type='text' placeholder='Ingrese aqui la tarea' onChange={ (e)=>setTarea(e.target.value) } value={tarea}/>
                <Button variant='success' type='submit'>Ingresar</Button>
            </Form.Group>
        </Form>
        <ListadoTareas tareas={tareas}></ListadoTareas>
        </>
    );
};

export default Formulario;