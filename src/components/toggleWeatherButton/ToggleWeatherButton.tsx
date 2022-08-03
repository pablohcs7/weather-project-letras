import React from 'react'

import './ToggleWeatherButton.css'

interface ToggleWeatherButtonProps {}

export const ToggleWeatherButton: React.FC<ToggleWeatherButtonProps> = () => {
  return (
    <>
      <div className="button-container">
        <div>ºF</div>
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
        <div>ºC</div>
      </div>
    </>
  )
}
