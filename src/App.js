import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.svg'
import Main from './main/Main'

const App = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Scotch Books</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <div className="navbar-nav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/books">Book</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Main/>
    </div>
  )
}

export default App
