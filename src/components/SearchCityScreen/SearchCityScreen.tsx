import React from 'react'
import { ToggleWeatherButton } from '../ToggleWeatherButton/ToggleWeatherButton'
import { AutocompleteInput } from './AutocompleteInput/AutocompleteInput'

interface SearchCityScreenProps {}

export const SearchCityScreen: React.FC<SearchCityScreenProps> = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <ToggleWeatherButton />
        </header>
        <main>
          <h1>Como está o tempo hoje?</h1>
          <AutocompleteInput />
        </main>
      </div>
    </>
  )
}
