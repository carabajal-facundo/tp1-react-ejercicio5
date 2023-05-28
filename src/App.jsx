import { Container } from 'react-bootstrap'
import './App.css'
import Formulario from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Container>
        <h1 className='mt-5'>Listado de tareas</h1>
        <Formulario></Formulario>
      </Container>
    </>
  )
}

export default App
