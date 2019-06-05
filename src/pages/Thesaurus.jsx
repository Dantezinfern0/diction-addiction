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
    Axios.get(`${apiUrl}${word}${theKey}`).then(resp => {
      console.log(resp.data)
      setWord({
        name: resp.data[0].hwi.hw,
        type: resp.data[0].fl,
        syn: resp.data[0].meta.syns
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
      <p>Word: {word.name}</p>
      <p>Type: {word.type}</p>
      <div>{word.syn.map(donkey => {
        return <p>{donkey}</p>
      })}</div>
      <HomeButton />
    </>
  )
}
