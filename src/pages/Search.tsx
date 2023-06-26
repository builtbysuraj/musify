import { useState } from "react"
import Autosuggest from "react-autosuggest"
import SelectSong from "../components/SelectSong"

interface Track {
  track: {
    images?: {
      coverart?: string
    }
    title?: string
  }
}

export default function Search() {
  const [value, setValue] = useState<string>("")
  const [suggestions, setSuggestions] = useState<Track[]>([])
  const [selectedSong, setSelectedSong] = useState<Track["track"] | null>(null)

  const url = `https://shazam.p.rapidapi.com/search?term=${value}&locale=en-US`
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${import.meta.env.VITE_API_KEY}`,
      "x-rapidapi-host": `${import.meta.env.VITE_API_HOST}`,
    },
  }

  const onSuggestionsFetchRequested = async () => {
    const res = await fetch(url, options)
    if (!res.ok) throw new Error(`An error occurred: ${res.status}`)
    if (res.status === 200) {
      const data = await res.json()
      setSuggestions(data.tracks.hits)
    }
  }

  const onSuggestionSelected = (
    e: any,
    { suggestion }: { suggestion: Track }
  ) => {
    setSelectedSong(suggestion.track)
  }

  const onChange = (e: any, { newValue }: { newValue: string }) => {
    setValue(newValue)
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const getSuggestionValue = (suggestion: Track) => suggestion.track.title || ""

  const renderSuggestion = (suggestion: Track) => (
    <div className="list-unstyled custom-cursor">
      <img
        className="custom-image m-2"
        src={suggestion?.track?.images?.coverart}
        alt="song image"
      />
      {suggestion?.track?.title}
    </div>
  )

  const inputProps = {
    placeholder: "Type a song (minimum 3 char)",
    value,
    onChange,
    className: "form-control custom-input",
  }

  return (
    <div className="w-100">
      <div className="d-flex align-items-center justify-content-center">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={onSuggestionSelected}
        />
      </div>
      {selectedSong && <SelectSong selectedSong={selectedSong} />}
    </div>
  )
}
