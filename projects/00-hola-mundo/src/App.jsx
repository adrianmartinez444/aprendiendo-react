import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing={false} userName = "midudev" >
        Miguel Ángel Durán
        {/* Cualquier cosa que pongamos aquí dentro, se pasará como un children a nuestro componente TwitterFollowCard, y lo podremos usar para mostrar el nombre del usuario, o lo que queramos mostrar. */}
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={true} userName = "pheralb">
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard  isFollowing={false} userName = "vxndev">
        Vanderha
      </TwitterFollowCard>
    </section>
  )
}