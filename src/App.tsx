import React from 'react'

import './App.css'
import { SearchCityScreen } from './components/SearchCityScreen/SearchCityScreen'

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <>
      <SearchCityScreen />
    </>
  )
}
