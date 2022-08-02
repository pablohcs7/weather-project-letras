import './App.css'

import React from 'react'
import { ToggleWeatherButton } from './components/toggleWeatherButton/ToggleWeatherButton'

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <ToggleWeatherButton />
        </header>
        <main>
          <h1>Como está o tempo hoje?</h1>
          <input
            id="autocomplete"
            type="text"
            placeholder="Digite o nome da cidade"
          />
        </main>
      </div>
    </>
  )
}
