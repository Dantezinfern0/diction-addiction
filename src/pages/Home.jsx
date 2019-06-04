import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <>
      <h1>
        <Link to="/dictionary">Dictionary</Link>
        <p>or</p>
        <Link to="/thesaurus">Thesaurus</Link>
      </h1>
    </>
  )
}
