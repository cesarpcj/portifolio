import React, {useState} from 'react';
import {GrLinkedin, GrGithub, GrMail} from 'react-icons/gr';
import {FaPhoneSquareAlt} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';

export default function MainInfo() {
    const [chosenInfo, setChosenInfo] = useState("cesarpcj@hotmail.com");
    return (
        <div className="main--info">
            <div className="main--info--icons">

                <p>
                    <GrMail onMouseOver={() => setChosenInfo("cesarpcj@hotmail.com")}/> 
                </p>
                <p>
                    <FaPhoneSquareAlt onMouseOver={() => setChosenInfo("+44 07719165796")}/>
                </p>
                <p>
                    <MdLocationOn onMouseOver={() => setChosenInfo("Birmingham, UK")}/>
                </p>
                <p>
                    <a href="https://github.com/cesarpcj" rel="noopener noreferrer" target="_blank">
                        <GrGithub onMouseOver={() => setChosenInfo("https://github.com/cesarpcj")}/>
                    </a> 
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/cesar-mello-70a84b40/" rel="noopener noreferrer" target="_blank">
                        <GrLinkedin onMouseOver={() => setChosenInfo("cesar-mello-70a84b40/")}/> 
                    </a>
                </p>
            </div>
            <div className="yellow--color">{chosenInfo}</div>
            
        </div>
    )
}
