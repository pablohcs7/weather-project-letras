import React, { useState } from 'react'

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete'

import './AutocompleteInput.css'

interface AutocompleteInputProps {}

//componente responsável por gerar o campo que renderiza o autocomplete e retorna a latitude e longitude da cidade selecionada
export const AutocompleteInput: React.FC<AutocompleteInputProps> = () => {
  const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0
  })

  //faz o autocomplete mostrar apenas cidades
  const searchOptions = {
    types: ['(cities)']
  }

  const handleSelect = async (value: any) => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setAddress(value)
    setCoordinates(latLng)
  }

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="autocomplete">
            <input
              id="city"
              {...getInputProps({ placeholder: 'Digite o nome da cidade' })}
            />

            <div id="suggestion-list">
              {loading ? <div>...Loading</div> : null}

              {suggestions.map((suggestion) => {
                return (
                  <div
                    className="suggestion"
                    {...getSuggestionItemProps(suggestion)}
                  >
                    {suggestion.description}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  )
}
