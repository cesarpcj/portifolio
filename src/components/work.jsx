import React from 'react';
import WorkItem from './workItem';
import Projects from '../files/projects.json';


export default function work() {
    
    return (
        <div className="main--works">
            <h3>Work</h3>
            <div className="main--works--list">
                {
                    Projects.map(project =>{
                        return <WorkItem img={project.img} title={project.title} description={project.description}/>
                    }

                    )
                }
             

            </div>
        </div>
    )
}
