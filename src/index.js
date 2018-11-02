import React from 'react'
import ReactDOM from 'react-dom'
import MainCard from './MainCard'

import './styles.scss'

function App () {
  return (
    <div className='App'>
      <MainCard />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
