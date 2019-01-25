import React from 'react'
import './Header.css'
import logo from '../../shelfie_icon.png'

function Header(props) {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt='logo'/>
            <p className='companyName'>SHELFIE</p>
        </div>
    )
}

export default Header