import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SpaIcon from '@mui/icons-material/Spa';
import { useState } from 'react'

export default function Navbar(props) {
  const [ menuOpen, setMenuOpen ] = useState(false);

  const handleMenu = ()  => {
    return setMenuOpen((prevState) => !prevState);
  }

  return (
    <nav>
      <h1><SpaIcon className='logo-img' /> <span>Eco</span>Nod</h1>
      <ul className={`navbar-items ${!menuOpen && 'hidden'}`}>
        {props.navbarItems.map((item, index) => {
          return <li className='navbar-item' onClick={() => setMenuOpen(false)} key={index}>{item}</li>
        })}
      </ul>
      <div className='nav-right'>
        <ShoppingBagOutlinedIcon className='shopping-bag' />
        <div className="icon-container">
          { menuOpen ? <MenuOpenIcon sx={{fontSize: 32}} onClick={handleMenu} className='menu' /> : <MenuIcon sx={{fontSize: 32}} onClick={handleMenu} className='menu' /> }
        </div>
      </div>
    </nav>
  )
}