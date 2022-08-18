import React, {useState} from 'react';
import WorkItem from './workItem';
import Projects from '../files/projects.json';
import WorkItemInfo from '../components/workItemInfo';


export default function Work() {
    const [chosenItem, setChosenItem] = useState(0);
    return (
        <div className="main--works">
            <h3>Work</h3>
            <div className="main--works--list">
                {
                    Projects.map(project =>{
                        
                        return <WorkItem key={project.name} {...project} pick={() => setChosenItem(project.id)}/>
                    })
                }
            </div>
            <WorkItemInfo {...Projects[chosenItem]}/>

        </div>
    )
}
