import React from 'react'
import {useDispatch} from 'react-redux'
import Button from '../Button'
import {Link} from 'react-router'

import {setActive} from '../../features/menuSlices/activeSlice'


function LeftMenu() {
  const dispatch = useDispatch()

  return (
    <nav className='navbar-left'>
        <h3>Menu</h3>
      <Link to="/">
        <Button className="navbar-left-button" onClick={() => dispatch(setActive('all'))}>Home</Button>
      </Link>
      <Link to="/">
        <Button className="navbar-left-button" onClick={() => dispatch(setActive('popular'))}>Pics</Button>
      </Link>
      <Link to="/">
        <Button className="navbar-left-button" onClick={() => dispatch(setActive('amazing'))}>Me Irl</Button>
      </Link>
    </nav>
  )
}

export default LeftMenu
