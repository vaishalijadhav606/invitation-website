import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li><Link hashSpy={true} offset={-65} activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                    <li><Link hashSpy={true} offset={-65} to="about" spy={true} smooth={true}>Our Story</Link></li>
                    <li><Link hashSpy={true} offset={-65} to="greeting" spy={true} smooth={true}>Greetings</Link></li>
                    <li><Link hashSpy={true} offset={-65} to="When" spy={true} smooth={true}>When & Where</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;