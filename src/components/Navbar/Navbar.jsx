import React from 'react'
import './Navbar.css'
import { useState } from 'react'

function Navbar() {
    const [active, setActive] = useState('Home')
    const [menu, setMenu] = useState(true);
    const [sym, setSymbol] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu); 
        setSymbol(!sym);
    };
    
    return (
        <div id='home' className='bg'>
            <div className={menu ? 'hamburger' : 'cross'}
             onClick={toggleMenu}></div>
            <nav className={sym ? 'vertical' : ''}>
                <div className='logo'>
                    <span>aryansadh</span>
                </div>
                <ul className='menu'>
                    <li className='menu-items'><a href="#home" onClick={()=>{setActive('Home')}} style={(active === 'Home')?{color: 'aqua'}:{}}>Home<span></span></a></li>
                    <li className='menu-items'><a href="#about" onClick={()=>{setActive('About')}} style={(active === 'About')?{color: 'aqua'}:{}}>About<span></span></a></li>
                    <li className='menu-items'><a href="#resume" onClick={()=>{setActive('Resume')}} style={(active === 'Resume')?{color: 'aqua'}:{}}>Resume<span></span></a></li>
                    <li className='menu-items dropper'><a href="#" onClick={()=>{setActive('Services')}} style={(active === 'Services')?{color: 'aqua'}:{}}>Services<span></span></a>
                    <ul className='hidden'>
                        <li className='dropper-items'>
                            Designer
                        </li>
                        <li className='dropper-items'>
                            Developer
                        </li>
                    </ul>
                    </li>
                    <li className='menu-items'><a href="#Projects" onClick={()=>{setActive('Projects')}} style={(active === 'Projects')?{color: 'aqua'}:{}}>Projects<span></span></a></li>
                    <li className='menu-items'><a href="#Blogs" onClick={()=>{setActive('My Blog')}} style={(active === 'My Blog')?{color: 'aqua'}:{}}>My Blog<span></span></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
