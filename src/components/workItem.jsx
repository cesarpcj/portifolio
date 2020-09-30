import React, {useEffect} from 'react'

export default function WorkItem(props) {
   
    const isOnView = (el)=>{
        var rect = el.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    useEffect(()=>{
        var elem = document.getElementById(props.title);
        window.addEventListener('scroll', () =>{
            isOnView(elem) ? elem.classList.add("work-item-animation") : elem.classList.remove("work-item-animation");
        });

        return ()=>{
            window.removeEventListener('scroll', () =>{
                isOnView(elem) ? elem.classList.add("work-item-animation") : elem.classList.remove("work-item-animation");
            });
        }
    })

    return (
        
       <div id={props.title} className="main--works--item">

            <div>
                <div className="main--works--item--card--body">
                    <h5 className="card-title yellow--color">{props.title}</h5>
                    <p className="card-text white--color">{props.description}</p>
                    <a href={props.link} className="btn--card">Check</a>
                </div>
                
             </div>
       </div>
        
    )
}
