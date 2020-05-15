import React from 'react';
import "./Header.css"
const Header = ({ }) => {

    return (
        <div className="header-div">
            <div className='header-image-div'>
                <img className='header-image' src='https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-5.png' alt='logo'></img>
            </div>
            <a className='header-anchor'>Instagram </a>
        </div>
    )
}

export default Header