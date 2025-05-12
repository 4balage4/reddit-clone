import Button from '../Button'
// import imageUrl from '../../assets/custom-logo.png'
import imageUrl from '../../assets/picdit-logo-wide.png'
import {Link} from 'react-router'


function Header() {
  return (
    <header className='header'>
        <div className='logo'>
          <Link to='/'>
            <img src={imageUrl} alt='picdit logo' />
          </Link>
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
