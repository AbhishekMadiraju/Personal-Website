import React, {Component} from 'react';
import './AboutMe.css';
import mypic from './IMG_8974.jpg';

class AboutMe extends Component {
    render() {
        return (
                <div id="profile">
                    <div id="pic">
                        <img src={mypic} />
                        <div id="icons">
                            <a href="https://www.linkedin.com/in/abhishek-madiraju-698286aa/" className="fab fa-linkedin" target="_blank"></a>
                            <a href="https://github.com/AbhishekMadiraju" className="fab fa-github-square" target="_blank"></a>
                            <a href="./Abhishek_Madiraju.pdf" download className="far fa-file-pdf"></a>
                        </div>
                    </div>
                    <div id="writeup">
                        <h1>ABOUT ME</h1>
                        <h2>I am a Computer Science Masters Graduate with experience working across the stack right from Frontend to System Programming. 
                        My passion for technology has motivated me to work on areas such as Web Development, Frontend, Backend, Networking, Data Mining, Java programming and many more. 
                        I also have worked on modern frameworks such as React and Node JS. I currently reside in San Mateo, CA. Feel free to contact me if you are intersted in my work or want to chat sometime:</h2>
                        <a href="mailto:abhishekmadiraju@gmail.com" className="fas fa-envelope">abhishekmadiraju@gmail.com</a>
                    </div>
                </div>
        )
    }
}

export default AboutMe;