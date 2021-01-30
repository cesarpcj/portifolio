import React, {useEffect, useState} from 'react'

export default function WorkItem(props) {
   
    
    
    const isOnView = (el)=>{
        var rect = el.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    // useEffect(()=>{
    //     var elem = document.getElementById(props.title);
    //     window.addEventListener('scroll', () =>{
    //         isOnView(elem) ? elem.classList.add("work-item-animation"):elem.classList.remove("work-item-animation");
                
            
    //     });

    //     return ()=>{
    //         window.removeEventListener('scroll', () =>{
    //             isOnView(elem) ? elem.classList.add("work-item-animation"):elem.classList.remove("work-item-animation");

    //         });
    //     }
    // })

    const firstItem = "main--works--item--first";
    const nextItems = "main--works--item--next";

    return (
        

       <div id={props.title}  style={{zIndex: props.id}} className={props.id === 0 ? firstItem : nextItems} onMouseOver={props.pick}>

            <div>
                <div className="main--works--item--card--body">
                    <div>

                        <p className="grey--color">{props.type}</p>
                        <h5 className="white--color">{props.title}</h5>
                        <p className="orange--color">{props.tools}</p>
                    </div>
                    <div>

                        <a href={props.link} target="blank" className="btn--card">{props.action}</a>
                    </div>
                </div>
                
             </div>
       </div>
        
    )
}
