import React, {Component} from 'react';
import './NavBar.css';
import image from './abhi.png';

class NavBar extends Component {
    render() {
        return (
            <div className="navigate">
                <header>
                    <div className="logo">
                        <a href="#info">
                            <img src={image} href="#info"/>
                        </a>
                    </div>
                    <nav>
                        <a href="#profile">About Me</a>
                        <a href="#projects">My Work</a>
                    </nav>
                </header>
            </div>
        )
    }
}

export default NavBar;