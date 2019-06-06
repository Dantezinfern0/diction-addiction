import React, { useState } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.jsx'


export default function Thesaurus() {
  const apiUrl =
    'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'
  const theKey = '?key=8c234c39-cdc9-45fb-93b7-86ebbfd16948'
  const [word, setWord] = useState('')
  const [definition, setDefinition] = useState([])
  const [alternate, setAlternate] = useState([])
  const errorMessage = () => {
    return console.log('stuff broke')

  }
  const apiCaller = e => {
    e.preventDefault()
    Axios.get(`${apiUrl}${word}${theKey}`).then(resp => {
      console.log(resp.data)
      if (word.includes(' ') === false) {
        const data = resp.data[0]
        setDefinition({
          definition: data.shortdef[0],
          type: data.fl,
          syn: data.meta.syns[0],
          off: data.meta.offensive,
          ants: data.meta.ants[0]
        })
      } else if (word.includes(' ') === true) {
        setAlternate({
          strings: resp.data[0]
        })
      } else {
        errorMessage()
      }
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
      <div className="squeeze">
        <h3>Word: {word}</h3>
        <h3>Type: {definition.type && definition.type}</h3>
        <h3>
          Definition:{' '}
          {definition.definition && <h2>{definition.definition}</h2>}
        </h3>
        {alternate.strings && <h3>Did You Mean?: {alternate.strings}</h3>}
        <div className="flex">
          <ol>
            <h3>Synonyms</h3>
            {definition.syn &&
              definition.syn.map((item, i) => {
                return <li key={i}>{item}</li>
              })}
          </ol>
          <ol>
            <h3>Antonyms</h3>
            {definition.ants &&
              definition.ants.map((item, i) => {
                return <li key={i}>{item}</li>
              })}
          </ol>
        </div>
      </div>
        <footer><h3 className="centered">Offensive word?</h3>
        <h3 className={definition.off ? 'red' : 'green'}>
          {definition.off
            ? 'Totally Offensive: use with extreme caution'
            : 'Nope. Good to Go'}
        </h3>
        </footer>
      <HomeButton />
    </>
  )
}
