import React, {Component} from 'react';
import './AboutMe.css';
import mypic from './IMG_8974.jpg'

class AboutMe extends Component {
    render() {
        return (
                <div id="profile">
                    <div id="pic">
                    <img src={mypic} />
                    </div>
                    <div id="writeup">
                        <h1>About Me</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                    </div>
                </div>
        )
    }
}

export default AboutMe;