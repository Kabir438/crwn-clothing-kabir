import React from 'react';
import {ReactComponent as Logo} from '../../assets/crwn.svg';
import {Link} from 'react-router-dom'

export default  function Header() {
    return (
        <header className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
            </div>
        </header>
    )
}