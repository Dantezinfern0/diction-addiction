import React, { useState } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.jsx'


export default function Thesaurus() {
  const apiUrl = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'
  const theKey = '?key=8c234c39-cdc9-45fb-93b7-86ebbfd16948'
  const [word, setWord] = useState('')
  const apiCaller = (e) => {
    e.preventDefault()
    Axios.post(`${apiUrl}${word}${theKey}`).then(resp => {
      console.log(resp.data)
      setWord(resp.data)
    })
  }
    return (
      <>
        <form onSubmit={apiCaller}>
          <input
            type="text"
            placeholder="Words Words Words"
            value={word}
            onChange={e => {
              setWord(e.target.value)
            }}
          />
          <button onClick={apiCaller}>Look it Up!</button>
        </form>
        <HomeButton/>
      </>
    )
  }

