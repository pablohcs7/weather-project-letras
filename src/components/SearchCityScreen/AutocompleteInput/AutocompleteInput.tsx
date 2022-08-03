import React, { useState } from 'react'

import PlacesAutocomplete from 'react-places-autocomplete'

import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

interface AutocompleteInputProps {}

//componente responsável por gerar o campo que renderiza o autocomplete
export const AutocompleteInput: React.FC<AutocompleteInputProps> = () => {
  const [address, setAddress] = useState('')

  const handleSelect = async (value: any) => {}

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
                return <div>{suggestion.description}</div>
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  )
}
