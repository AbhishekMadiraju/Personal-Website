import React, {Component} from 'react';
import './Project.css';

class Project extends Component {
    
    render() {

        const {name, description} = this.props;
        const stack = this.props.stack.map((s, index) => (
            <i key={index} className={s}></i>
        ));
        return (
            <div className="project">
                <div className="p-title">
                    <h1>{name} <a href="https://github.com/AbhishekMadiraju" className="fab fa-github-square" target="_blank"></a></h1>
                </div>
                <div className="p-description">
                    <p>{description}</p>
                </div>
                <div className="stack">
                    {stack}
                </div>
            </div>
        )
    }
}

export default Project;