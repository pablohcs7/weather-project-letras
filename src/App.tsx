import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import { RoutesList } from './RoutesList'

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <>
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </>
  )
}
