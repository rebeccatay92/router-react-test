import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Home from './Home'
import About from './About'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <div className='App-intro'>
          {/* Start of routing. Router/Route/Link */}

          <Router>
            <div>
              <nav>
                <Link to='/'>Home</Link>{ ' || ' }
                <Link to='/about'>About</Link>
              </nav>
              <Route exact path='/' component={
                () => (
                  <Home description={'This is homepage'} users={['a', 'b', 'c', 'd', 'e', 'f']} />
                )
              } />
              <Route path='/about' component={
                () => (
                  <About description={'This is about page'} />
                )
              } />
            </div>

          </Router>
        </div>
      </div>
    )
  }
}

export default App
