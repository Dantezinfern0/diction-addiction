import React, { useState } from 'react'
import Axios from 'axios'
import HomeButton from '../components/HomeButton.jsx'
import ListItem from '../components/ListItem.jsx'

export default function Dictionary() {
  // let def = []
  // const mapIt = () => {
  //   for (let i = 0; i < def.length; i++) {
  //     return <li>{def[i]}</li>
  //   }
  // }
  const apiUrl =
    'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'
  const dicKey = '?key=8b979027-815e-4cca-93ca-e396a7bb4be7'
  const [term, setTerm] = useState('')
  const apiCall = e => {
    e.preventDefault()
    Axios.get(`${apiUrl}${term}${dicKey}`).then(resp => {
      console.log(resp.data)
      setTerm({
        name: resp.data[0].hwi.hw,
        type: resp.data[0].fl,
        def: resp.data[0].shortdef,
        def2: resp.data[0].shortdef[1],
        def3: resp.data[0].shortdef[2],
        def4: resp.data[0].shortdef[3],
        def5: resp.data[0].shortdef[4],
        def6: resp.data[0].shortdef[5],
        def7: resp.data[0].shortdef[6]
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
        <h6>Word: {term.name}</h6>
        <h6>Type: {term.type}</h6>
      <ol>
        { term.def && <li>Def: {term.def}</li>}
        { term.def2 && <li>Def: {term.de2}</li>}
        { term.def3 && <li>Def: {term.def3}</li>}
        { term.def4 && <li>Def: {term.def4}</li>}
        { term.def5 && <li>Def: {term.def5}</li>}
        { term.def6 && <li>Def: {term.def6}</li>}
        { term.def7 && <li>Def: {term.def7}</li>}
        <ListItem/>
      </ol>
      {/* {mapIt} */}
      {/* <ol>{term.def.map(donkey => {
        return <li>{donkey}</li>
      })}</ol> */}
      <HomeButton />
    </>
  )
}
