import React from 'react'
import Button from '../Button'

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
          <h2>Balagedit</h2>
        </div>
        <form action="">
          <label htmlFor="search">
            <input id='search' type="text" />
            <Button type='submit' className='search-btn'>Search 🔎</Button>
          </label>
        </form>
        <div className='header-button-container'>
          <Button className='login-btn'>Log in</Button>
          <Button className='signup-btn'>Sign up</Button>
        </div>
    </header>
  )
}

export default Header
