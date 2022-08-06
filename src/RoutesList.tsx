import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ResultsScreen } from './components/ResultsScreen/ResultsScreen'
import { SearchCityScreen } from './components/SearchCityScreen/SearchCityScreen'

interface RoutesListProps {}

export const RoutesList: React.FC<RoutesListProps> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchCityScreen />} />
        <Route path="/result/:lat/:lng" element={<ResultsScreen />} />
      </Routes>
    </>
  )
}
