import React, {useState} from 'react';
import {GrLinkedin, GrGithub, GrMail, GrPhone, GrLocation} from 'react-icons/gr';
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
                    <FaPhoneSquareAlt onMouseOver={() => setChosenInfo("+351 910 138 605")}/>
                </p>
                <p>
                    <MdLocationOn onMouseOver={() => setChosenInfo("Lisbon, Portugal")}/>
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
            <div className="main--info--chosen">{chosenInfo}</div>
            
        </div>
    )
}
