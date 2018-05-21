import React, {Component} from 'react';
import Project from './Project';
import './ProjectList.css';

class ProjectList extends Component {
    static defaultProps = {
       projects:[{
        name: "www.abhishekmadiraju.com",
        description: "A personal website built using React JS describing my experience and project portfolio.",
        stack: ["devicon-html5-plain-wordmark colored","devicon-css3-plain-wordmark colored",
                "devicon-javascript-plain colored","devicon-react-original-wordmark colored",
                "devicon-nodejs-plain-wordmark colored"],
        link:"https://github.com/AbhishekMadiraju/Personal-Website"
    },
    {
        name:"YELPCAMP",
        description:"A full stack web application for campground reviews. Users can create an account and add their own campgrounds and rate others.",
        stack:["devicon-html5-plain-wordmark colored","devicon-css3-plain-wordmark colored",
               "devicon-javascript-plain colored","devicon-nodejs-plain-wordmark colored",
               "devicon-express-original-wordmark","devicon-mongodb-plain-wordmark colored"],
        link:"https://github.com/AbhishekMadiraju/Yelpcamp"
    },
    {
        name:"BIG DATA ANALYSIS ON AWS",
        description: "Hadoop MapReduce application to perform wordcount analysis on Wikipedia files related to all 50 states.",
        stack:["devicon-java-plain-wordmark colored","devicon-amazonwebservices-plain-wordmark colored"],
        link:"https://github.com/AbhishekMadiraju/Big-Data-Analysis"
    },
    {
        name: "ONLINE MEMBERSHIP SYSTEM",
        description: "A Java desktop application to manage online membership. Users can modify their own information and search for other users, wheres an admin can add or remove other users and modify their information as well.",
        stack:["devicon-java-plain-wordmark colored","devicon-mysql-plain-wordmark colored"],
    },
    {
        name:"SUPPORT VERCTOR MACHINES",
        description: "Wrote a python program using scikit-learn to calaculate accuracy of SVM on various datasets using linear and radial kernel. Performed k-fold cross validation to improve accuracy.",
        stack:["devicon-python-plain-wordmark colored"],
        link:"https://github.com/AbhishekMadiraju/Support-Vector-Machines"
    },
    {
        name:"STOCK OPTIONS ADVISOR",
        description:"Implemented the Apriori Algortihm in Java to generate association rules for stock options data obtained from NASDAQ's website. Used lex/yacc to extract data from NASDAQ html files and store it in CSV.",
        stack:["devicon-java-plain-wordmark colored","devicon-c-plain-wordmark colored"],
        link:"https://github.com/AbhishekMadiraju/HTML-Parser"
    },
    {
        name:"DICTIONARY ATTACK",
        description:"Performed a dictionary attack on Linux style shadow file and checked if it contains any commonly used passwords. Implemented the MD5 hashing algorithm using Java crypto librarires to perform this attack and understand one way hashing functions.",
        stack:["devicon-java-plain-wordmark colored"]
    },
    {
        name:"CLICKJACKING ATTACK",
        description: "Developed a malicious web page using HTML and CSS where clicking a button will lead to deleting a project which is entirely hidden under an iframe. The content of the iframe is a replica of a logged in page from a project management app. The purpose of the attack is to make the user close a project without their knowledge.",
        stack:["devicon-html5-plain-wordmark colored","devicon-css3-plain-wordmark colored"]
    },
    {
        name:"UDP RADIO STREAMER",
        description: "A UDP client developed using C, which fragments a given audio file in any format and sends it to a remote media player like VLC.",
        stack:["devicon-c-plain-wordmark colored"],
        link:"https://github.com/AbhishekMadiraju/Packet-Radio-Streamer"
    },
    {
        name: "PROXY SERVER",
        description: "Developed a C based proxy server which handles HTTP GET and FTP requests.",
        stack: ["devicon-c-plain-wordmark colored"],
        link:"https://github.com/AbhishekMadiraju/Proxy-Server"
    }]
    };
    
    render() {
        const projects = this.props.projects.map((p, index) => (
            <Project key={index} {...p} />
        ));
        return (
            <div id="projects">
                <div id="heading">
                    <h1>PROJECTS</h1>
                </div>
                <div className="project-list">
                    {projects}
                </div>
            </div>
        )
    }
}

export default ProjectList;