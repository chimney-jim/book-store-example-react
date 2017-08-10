import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Book from '../book/Book'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/books" component={Book} />
    </Switch>
  </main>
)

export default Main
