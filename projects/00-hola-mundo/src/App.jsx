import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  const formatUsername = (userName) => `@${userName}`
  return (
    <section className="App">
      <TwitterFollowCard formatUsername={formatUsername} isFollowing={false} userName = "midudev" name = "Adrian Martinez" />
      <TwitterFollowCard formatUsername={formatUsername} isFollowing={true} userName = "pheralb" name = "Pablo Hernandez" />
      <TwitterFollowCard formatUsername={formatUsername}  userName = "adrianmartinez444" name = "Adrian Martinez" />
    </section>
  )
}