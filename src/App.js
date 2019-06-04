import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dictionary from './pages/Dictionary.jsx'
import Thesaurus from './pages/Thesaurus.jsx'
import Home from './pages/Home.jsx'

export default function Routed() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dictionary" exact component={Dictionary} />
          <Route path="/thesaurus" exact component={Thesaurus} />
        </Switch>
      </Router>
    </>
  )
}
