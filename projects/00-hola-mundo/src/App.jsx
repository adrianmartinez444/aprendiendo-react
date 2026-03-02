import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  const [name, setName] = useState("midudev")
  return (
    <section className="App">
      <TwitterFollowCard  userName = {name} >
        Miguel Ángel Durán
        {/* Cualquier cosa que pongamos aquí dentro, se pasará como un children a nuestro componente TwitterFollowCard, y lo podremos usar para mostrar el nombre del usuario, o lo que queramos mostrar. */}
      </TwitterFollowCard>
      <TwitterFollowCard  userName = "pheralb">
        Pablo Hernandez
      </TwitterFollowCard>
      <button onClick={() => setName("Pedromichel")}>
        Cambio nombre
      </button>
    </section>
  )
}