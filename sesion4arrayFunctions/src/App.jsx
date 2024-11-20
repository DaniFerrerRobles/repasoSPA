import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ListaFutbolistas } from './ComponenteMap'
import { SumaGoles } from './ComponenteReduce'
import { BuscarJugador } from './ComponenteFind'
import { VerificarGoles } from './ComponenteSomeYEvery'
import { VerJugadores } from './ComponenteForEach'
import { JugadoresConPocosGoles } from './ComponenteUsoCombinado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Ejemplos de Funciones de Arrays en React</h1>

      <ListaFutbolistas/>
      <SumaGoles/>
      <BuscarJugador/>
      <VerificarGoles/>
      <VerJugadores/>
      <JugadoresConPocosGoles/>
      

    </div>
    
  )
}

export default App
