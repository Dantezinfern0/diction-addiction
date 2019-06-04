import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <>
      <h1 id="color">
        Diction-Addiction App
        <div className="padding">
          <Link id="color" to="/dictionary">
            Dictionary
          </Link>
          <div id="color">or</div>
          <Link id="color" to="/thesaurus">
            Thesaurus
          </Link>
        </div>
      </h1>
    </>
  )
}
