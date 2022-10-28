import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';


function AboutPage() {
    return (
        <div className="about"> 
            <h1>"Keeper" is a simple note-taking app built with React.js, Bootstrap, Node.js, Express, and MongoDB.</h1>
                <p> The application allows you to browse through a list of notes, as well as add, update, and delete notes.</p>

                
                <p>The source code is available in <a href="https://github.com/adityaraj543210/NoteTakingApp"> this repository </a> on GitHub.</p>
        </div>
    );
}

export default AboutPage;




