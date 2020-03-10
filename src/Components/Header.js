import React from 'react';

function Header(props){
    console.log(props)
    return (
        <div className='header'>
            <h1 className='logo' onClick={props.displayToggle}>COOKING WITH COLLIN</h1>
            <ul className='navbar'>
                <li className='navLinks'>About</li>
                <li className='navLinks'>Blog</li>
                <li className='navLinks'>Contact</li>
                <li className='navLinks' onClick={props.displayToggle}>My Recipes</li>
            </ul>
        </div>
    )
}

export default Header;