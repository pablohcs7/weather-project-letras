import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToggleWeatherButton } from '../ToggleWeatherButton/ToggleWeatherButton'

import './ResultsScreen.css'

interface ResultsScreenProps {}

interface DataProps {
  coord: {
    lon: number
    lat: number
  }
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: string
}

export const ResultsScreen: React.FC<ResultsScreenProps> = () => {
  const [data, setData] = useState()
  const { lat, lng } = useParams()

  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&lang=pt_br&units=metric&appid=1ba8e669c6747a91d6c1ba70636ba09d`
      )
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.error(e)
      })
  }, [])

  const dataTyped: DataProps = data

  const iconcode = dataTyped.weather[0].icon
  const iconUrl = `http://openweathermap.org/img/w/${iconcode}.png`

  return (
    <>
      <div className="results-container">
        <header className="results-header">
          <img
            onClick={handleClick}
            src="../../src/assets/arrow-back.svg"
            alt=""
          />
          <ToggleWeatherButton />
        </header>
        <main className="results-content">
          <div className="city">{dataTyped.name}</div>
          <div className="description">{dataTyped.weather[0].description}</div>
          <div className="temperature">
            <div className="value">{`${dataTyped.main.temp.toFixed(0)}º`}</div>
            <img src={iconUrl} alt="icone referente ao clima" />
          </div>
          <div className="min-max">
            <div>
              <span>MAX:</span> {`${dataTyped.main.temp_max.toFixed(0)}º`}
            </div>
            <div className="max-temp">
              <span>MIN:</span> {`${dataTyped.main.temp_min.toFixed(0)}º`}
            </div>
          </div>
          <div>
            <a href="#">Ver previsão para os próximos 5 dias</a>
          </div>
        </main>
        <footer>
          <div className="select-lang-buttons">
            <img
              src="../../src/assets/brazil.png"
              alt="bandeira do Brasil"
              height={20}
            />
            <img
              src="../../src/assets/united-states.png"
              alt="bandeira dos Estados Unidos"
              height={20}
            />
            <img
              src="../../src/assets/spain.png"
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
