import React, { useState } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.jsx'

export default function Thesaurus() {
  const apiUrl =
    'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'
  const theKey = '?key=8c234c39-cdc9-45fb-93b7-86ebbfd16948'
  const [word, setWord] = useState('')
  const apiCaller = e => {
    e.preventDefault()
    Axios.post(`${apiUrl}${word}${theKey}`).then(resp => {
      console.log(resp.data)
      setWord({
        name: resp.data[0].hwi.hw,
        type: resp.data[0].fl,
        def: resp.data[0].shortdef
      })
    })
  }
  return (
    <>
      <h1>Thesaurus</h1>
      <form onSubmit={apiCaller}>
        <input
          type="text"
          placeholder="Enter Word"
          onChange={e => {
            setWord(e.target.value)
          }}
        />
        <button onClick={apiCaller}>Look it Up!</button>
      </form>
      <h3>Word: {word.name}</h3>
      <h3>Type: {word.type}</h3>
      <h3>Definition: {word.def}</h3>
      
      <HomeButton />
    </>
  )
}
