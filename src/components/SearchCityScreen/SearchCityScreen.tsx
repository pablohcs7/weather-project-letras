import React from 'react'
import { ToggleWeatherButton } from '../ToggleWeatherButton/ToggleWeatherButton'
import { AutocompleteInput } from './AutocompleteInput/AutocompleteInput'

import './SearchCityScreen.css'

interface SearchCityScreenProps {}

export const SearchCityScreen: React.FC<SearchCityScreenProps> = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <ToggleWeatherButton />
        </header>
        <main className="content">
          <h1>Como está o tempo hoje?</h1>
          <AutocompleteInput />
        </main>
        <footer>
          <div className="select-lang-buttons">
            <img
              src="src\assets\brazil.png"
              alt="bandeira do Brasil"
              height={20}
            />
            <img
              src="src\assets\united-states.png"
              alt="bandeira dos Estados Unidos"
              height={20}
            />
            <img
              src="src\assets\spain.png"
              alt="bandeira da Espanha"
              height={20}
            />
          </div>
          <div className="selected-language">Idioma selecionado: Português</div>
        </footer>
      </div>
    </>
  )
}
