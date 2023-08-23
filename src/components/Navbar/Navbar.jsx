import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { useState } from 'react'

export default function Navbar(props) {
  const [ menuOpen, setMenuOpen ] = useState(false);

  const handleMenu = ()  => {
    return setMenuOpen((prevState) => !prevState);
  }

  return (
    <nav>
      <LogoDevIcon />
      { menuOpen ? <MenuOpenIcon sx={{fontSize: 32}} onClick={handleMenu} className='menu' /> : <MenuIcon sx={{fontSize: 32}} onClick={handleMenu} className='menu' /> }
      <ul className={`navbar-items ${!menuOpen && 'hidden'}`}>
        {props.navbarItems.map((item, index) => {
          return <li className='navbar-item' key={index}>{item}</li>
        })}
      </ul>
    </nav>
  )
}