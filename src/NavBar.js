import React, {Component} from 'react';
import './NavBar.css';
import image from './logo.png';

class NavBar extends Component {
    render() {
        return (
            <div class="navigate">
                <header>
                    <div class="logo">
                        <a href="#info">
                            <img src={image} href="#info"/>
                        </a>
                    </div>
                    <nav>
                        <a href="#">About Me</a>
                        <a href="#">My Work</a>
                        <a href="#">Contact</a>
                    </nav>
                </header>
            </div>
        )
    }
}

export default NavBar;