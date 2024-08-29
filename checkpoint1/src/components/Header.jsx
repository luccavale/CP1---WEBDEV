import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (

    <header className='header'>
        <nav>
            <ul className='navbar'>
                <li ><Link className='item' to="/">Home</Link></li>
                <li ><Link className='item' to="/sobre">Sobre</Link></li>
                <li ><Link className='item' to="/contato">Contato</Link></li>
            </ul>
        </nav>
    </header>


  );
};

export default Header;