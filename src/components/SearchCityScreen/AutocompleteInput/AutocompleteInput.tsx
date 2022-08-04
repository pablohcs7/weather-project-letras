import React, { useState } from 'react'

import PlacesAutocomplete from 'react-places-autocomplete'

import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

interface AutocompleteInputProps {}

//componente responsável por gerar o campo que renderiza o autocomplete e retorna a latitude e longitude da cidade selecionada
export const AutocompleteInput: React.FC<AutocompleteInputProps> = () => {
  const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0
  })

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
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({ placeholder: 'Digite o nome da cidade' })}
            />
            <div>
              {loading ? <div>...Loading</div> : null}

              {suggestions.map((suggestion) => {
                return (
                  <div {...getSuggestionItemProps(suggestion)}>
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
