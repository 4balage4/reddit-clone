import {useState} from 'react'
import {useDispatch} from 'react-redux'
import Button from '../Button'
import {Link} from 'react-router'

import {setActive} from '../../features/menuSlices/activeSlice'


function LeftMenu() {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)

  function handleMenu() {
    setOpen(prev => !prev)
  }


  return (
    <nav className='navbar-left'>
        <h3 onClick={handleMenu}>Menu</h3>
      <Link to="/all">
        <Button className={`navbar-left-button ${open && 'show'}`} onClick={() => dispatch(setActive('all'))}>Home</Button>
      </Link>
      <Link to="/pics">
        <Button className={`navbar-left-button ${open && 'show'}`} onClick={() => dispatch(setActive('popular'))}>Pics</Button>
      </Link>
      <Link to="/europe">
        <Button className={`navbar-left-button ${open && 'show'}`} onClick={() => dispatch(setActive('amazing'))}>Europe</Button>
      </Link>
    </nav>
  )
}



export default LeftMenu
