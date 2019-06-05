import React, { useState } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.jsx'
import ListItem from '../components/ListItem.jsx'

export default function Thesaurus() {
  const apiUrl =
    'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'
  const theKey = '?key=8c234c39-cdc9-45fb-93b7-86ebbfd16948'
  const [word, setWord] = useState('')
  const [definition, setDefinition] = useState({})
  const apiCaller = e => {
    e.preventDefault()
    Axios.get(`${apiUrl}${word}${theKey}`).then(resp => {
      console.log(resp.data)
      const data = resp.data[0]
      setDefinition({
        definition: data.shortdef[0],
        word: word,
        syn: data.meta.syns[0]
      })
    })
  }
  console.log({ definition })
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
      <p>Word: {definition.word}</p>
      <p>definition: {definition.definition}</p>
      <ol>
        {definition.syn &&
          definition.syn.map(item => {
            return <li>{item}</li>
          })}

        {/* {word.syn && <li>Type: {word.syn}</li>}
        {word.syn2 && <li>Type: {word.syn2}</li>}
        {word.syn3 && <li>Type: {word.syn3}</li>}
        {word.syn4 && <li>Type: {word.syn4}</li>} */}
        <ListItem />
      </ol>
      <HomeButton />
    </>
  )
}
