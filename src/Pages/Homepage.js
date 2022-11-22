import React from "react";
// import { Button } from 'semantic-ui-react';
import {Button} from 'dracula-ui'
import "../styles/Homepage.css"
import { Link } from 'react-router-dom';

export default function Homepage(){
    return(
        
        <>
            <div className="title-screen">
                <h1> Hi, l'm Aditya</h1>
                <span>i'm a Full Stack Developer</span>
                <div className="container" >
                    <ul className="title-screen-list">
                        <li>&#127757; I'm based in Australia, Sydney</li>
                        <br/>
                        <li>&#128235; adityagaikwad693@gmail.com</li>
                    </ul>
                </div>
                <br/>
                <div className="title-screen-button">  
                    <Link to='/skills'> &#9962; SKILLS</Link>
                    
                    <Link to='/projects'> &#127912; PROJECTS</Link>  
                </div>
            </div>
            
        </>      
    )
}