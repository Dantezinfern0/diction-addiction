import React, { useState } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.jsx'

export default function Dictionary() {
  const apiUrl =
    'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'
  const dicKey = '?key=8b979027-815e-4cca-93ca-e396a7bb4be7'
  const [term, setTerm] = useState('')
  const [info, setInfo] = useState({})
  const [suggestion, setSuggestion] = useState({})
  const errorMessage = () => {
    return console.log('stuff broke')
    // need help here how to make the page go to an error page
    // or remove the space from the end of the word 
    // which is what breaks the page
  }
  const apiCall = e => {
    e.preventDefault()
    if (term.includes(' ')) { term.remove(' ')
    }
    Axios.get(`${apiUrl}${term}${dicKey}`).then(resp => {
      console.log('first catch', resp.data[0])
      if (term.includes(' ') === false) {
        const dataLab = resp.data[0]
        setInfo({
          def: dataLab.shortdef,
          type: dataLab.fl,
          offense: dataLab.meta.offensive
        })
      } else if (term.includes(' ') === true) {
        setSuggestion({
          words: resp.data
        })
      } else {
        errorMessage()
      }
      console.log('second catch', suggestion.words)
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
      <div className="squeeze">
        <h3>Word: {term}</h3>
        <h3>Type: {info.type && info.type}</h3>
        {suggestion.words && <h3>Did you mean?:</h3>}
        <ol>
          {suggestion.words &&
            suggestion.words.map((item, i) => {
              return <li key={i}>{item}</li>
            })}
          {info.def &&
            info.def.map((item, i) => {
              return <li key={i}>{item}</li>
            })}
        </ol>
      </div>
      <footer>
        <h3 className="centered">Offensive word?</h3>
        <h3 className={info.offense ? 'red' : 'green'}>
          {info.offense
            ? 'Totally Offensive: use with extreme caution'
            : 'Nope. Good to Go'}
        </h3>
      </footer>
      <HomeButton />
    </>
  )
}
