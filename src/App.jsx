import React from 'react'
import "./index.css"
import Header from './Header'
import Content from './Content'

const App = () => {
  const plus = "./src/assets/icon-plus.svg"
  const minus = "./src/assets/icon-minus.svg"
  const background = "./src/assets/background-pattern-desktop.svg"

  return (
    <div className="main">
      <img id="bakground" src={background} alt="" width="100%" />
      <div className='box'>
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default App