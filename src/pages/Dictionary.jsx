import React, { useState } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.jsx'

export default function Dictionary() {
  const apiUrl =
    'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'
  const dicKey = '?key=8b979027-815e-4cca-93ca-e396a7bb4be7'
  const [term, setTerm] = useState('')
  const [info, setInfo] = useState('')
  const apiCall = e => {
    e.preventDefault()
    Axios.get(`${apiUrl}${term}${dicKey}`).then(resp => {
      console.log(resp.data)
      const data = resp.data[0]
      setInfo({
        def: data.shortdef,
        type: data.fl,
        offense: data.meta.offensive
      })
    })
  }
  return (
    <>
      <h1>Dictionary</h1>
      <form onSubmit={apiCall}>
        <input
          type="text"
          placeholder="Enter Word"
          onChange={e => {
            setTerm(e.target.value)
          }}
        />
        <button onClick={apiCall}>Look it Up!</button>
      </form>
      <h3 className='centered'>Offensive word?</h3>
      <h3 className={info.offense ? 'red' : 'green'}>{info.offense ? 'Totally Offensive: use with extreme caution' : 'Good to Go'}</h3>
      <h3>Word: {term}</h3>
      <h3>Type: {info.type}</h3>
      <ol>
        {info.def && info.def.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ol>
      <HomeButton />
    </>
  )
}
