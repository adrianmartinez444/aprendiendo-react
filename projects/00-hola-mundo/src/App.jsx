import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  const format = (userName) => `@${userName}`
  return (
    <section className="App">
      <TwitterFollowCard formatUsername={format} isFollowing={false} userName = "midudev" name = "Adrian Martinez" />
      <TwitterFollowCard formatUsername={format} isFollowing={true} userName = "pheralb" name = "Pablo Hernandez" />
      <TwitterFollowCard formatUsername={format}  userName = "adrianmartinez444" name = "Adrian Martinez" />
    </section>
  )
}