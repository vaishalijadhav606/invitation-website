import React, { Component } from 'react';
import { Link } from 'react-scroll';
import {useMediaQuery} from './hooks';
import home from '../assets/img/home.svg';

function Header(props) {

    const isMobileBased = useMediaQuery('(max-width: 767px)');
    
    return (
        <div className="header">
            <ul style={{display: isMobileBased ? 'none' : 'flex'}}>
                <li><Link hashSpy={true} offset={-65} activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                <li><Link hashSpy={true} offset={-65} to="about" spy={true} smooth={true}>Our Story</Link></li>
                <li><Link hashSpy={true} offset={-65} to="greeting" spy={true} smooth={true}>Greetings</Link></li>
                <li><Link hashSpy={true} offset={-65} to="When" spy={true} smooth={true}>When & Where</Link></li>
            </ul>
            <ul style={{display: isMobileBased ? 'flex' : 'none'}}>
                <li>
                    <Link hashSpy={true} activeClass="active" to="home" spy={true} smooth={true}>
                        <img src={home}/>    
                    </Link>
                </li>
                <li>
                    <Link hashSpy={true} to="about" spy={true} smooth={true}>
                        <img src={home}/>    
                    </Link>
                </li>
                <li>
                    <Link hashSpy={true} to="greeting" spy={true} smooth={true}>
                        <img src={home}/>    
                    </Link>
                </li>
                <li>
                    <Link hashSpy={true} to="When" spy={true} smooth={true}>
                        <img src={home}/>    
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;