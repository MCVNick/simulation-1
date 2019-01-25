import React from 'react'
import {Link} from 'react-router-dom'

import './Header.css'
import logo from '../../shelfie_icon.png'

function Header(props) {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt='logo' />
            <p className='companyName'>SHELFIE</p>

            <Link to='/'>
                <button className='headerButton dashboardButton'>
                    Dashboard
                    </button>
            </Link>
            <Link to='/add'>
                <button className='headerButton addInventoryButton'>
                    Add Inventory
                    </button>
            </Link>
        </div>
    )
}

export default Header