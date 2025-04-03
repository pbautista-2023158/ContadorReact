import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home'

function App() {
  const persons = [
    {name: 'Edson', surname: 'Aguilar'},
    {name: 'Jilian', surname: 'Alvarez'},
    {name: 'Francisco', surname: 'Marroquín'}
  ]

  //Constantes y variables
  //useState = Datos variables... Que se pintan en pantalla

  const num = 5
  const [count, setCount] = useState(0)
  const countDisabled = count <= -100
  const countDisabled2 = count >= 100
                                          //Valor inicial
  const [fullName, setFullName] = useState('Chupina despierto')
  const [sleep, setSleep] = useState(false)
  const [arrayPersons, setArrayPersons] = useState(persons)
  //Las funcionalidades se agregan antes del return

  //Metodos y funciones
  const addBautista = ()=>{
    setArrayPersons([...persons, {name: 'Pedrito', surname: 'Bautista'}])
    console.log(persons)
  }

  const sumar = ()=>{
    setCount((prevCount)=> prevCount + num)
  }

  const restar = ()=>{
    setCount((prevCount)=> prevCount - num)
  }

  //Hooks

  if(num){
   return <Home/>
  }else{
    
  }

  return (
    <>
      <h2>Hola mundo</h2>
      <h3>Me llamo: {fullName}</h3>
      <button onClick={() => {
        if(sleep) {
          setSleep(false)
          setFullName('Chupina dormido')
        }else{
          setSleep(true)
          setFullName('Chupina despierto')
        }
        }
      }>Actualizar nombre</button>

      <button onClick={addBautista}>Agregar a Bautista</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* {} = Inyeccion de JS, solo puede llevar 1 instruccion*/}
            <td>{arrayPersons[0].name}</td>
            <td>{arrayPersons[0].surname}</td>
          </tr>
          <tr>
            <td>{arrayPersons[1].name}</td>
            <td>{arrayPersons[1].surname}</td>
          </tr> 
          <tr>
            <td>{arrayPersons[2].name}</td>
            <td>{arrayPersons[2].surname}</td>
          </tr> 
          <tr>
            <td>{arrayPersons[3]?.name}</td> {/* Si tiene un ? es opcional, en este caso es el dato que le va a llegar del boton */}
            <td>{arrayPersons[3]?.surname}</td>
          </tr>                                   
        </tbody>
      </table>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={sumar} disabled={countDisabled2}>Sumar</button>
      <h4>{count}</h4>
      <button onClick={restar} disabled={countDisabled}>Restar</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
