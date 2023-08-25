import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import EcoModIcon from '../../assets/ecomod-icon.png';
import { useState } from 'react'

export default function Navbar() {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const navbarItems = [
    {
      name: 'Proposta',
      href: '#proposal'
    },
    {
      name: 'Sobre nós',
      href: '#about'
    },
    {
      name: 'Projetos',
      href: '#projects'
    },
    {
      name: 'Contato',
      href: '#contact'
    }
  ];

  const handleMenu = ()  => {
    return setMenuOpen((prevState) => !prevState);
  }

  return (
    <nav>
      <h1><img className='logo-img' src={EcoModIcon} alt='Logo da EcoNod' /> <span>Eco</span>Mod</h1>
      <ul className={`navbar-items ${!menuOpen && 'hidden'}`}>
        {navbarItems.map((item, index) => {
          return <a href={item.href} className='navbar-item' onClick={() => setMenuOpen(false)} key={index}>{item.name}</a>
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