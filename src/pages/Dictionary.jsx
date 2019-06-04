import React, { useState } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.jsx'


export default function Dictionary() {
  const apiUrl =
    'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'
  const dicKey = '?key=8b979027-815e-4cca-93ca-e396a7bb4be7'
  const [term, setTerm] = useState('')
  const apiCall = (e) => {
    e.preventDefault()
    Axios.post(`${apiUrl}${term}${dicKey}`).then(resp => {
      console.log(resp.data)
      setTerm(resp.data)
    })
  }
    return (
      <>
      <h1>Dictionary</h1>
        <form onSubmit={apiCall}>
          <input
            type="text"
            placeholder="Words Words Words"
            value={term}
            onChange={e => {
              setTerm(e.target.value)
            }}
          />
          <button onClick={apiCall}>Look it Up!</button>
        </form>
        <HomeButton/>
      </>
    )
  }

