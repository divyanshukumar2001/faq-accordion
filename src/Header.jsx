import React from 'react'
import "./index.css"

const Header = () => {
    const star = "./src/assets/icon-star.svg"
  return (
    <header className='header'>
        <img src={star} alt="star" />
        <h1>FAQs</h1>
    </header>
  )
}

export default Header