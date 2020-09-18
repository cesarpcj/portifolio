import React from 'react';
import MainIntro from './mainIntro.jsx';
import MainInfo from './mainInfo.jsx';

export default function header() {
    return (
        <div className="main--header d-flex flex-column justify-content-around">
            <MainIntro/>
            <MainInfo/>

        </div>
    )
}
