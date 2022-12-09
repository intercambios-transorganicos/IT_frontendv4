import React from 'react';
import "./circlePath.scss"

const Circlepath = (props) => {
    return (
       <div className="circlePathContainer">
           <svg viewBox="0 0 500 500" className="circlePath" >
           <defs>
               <path 
               d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" 
               id="textcircle" >
                   <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="30s"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    repeatCount="indefinite" 
                    />
               </path>
           </defs>
           <text dy="70" textLength="1220" fill={props.textColor} fontSize="4em">
               <textPath xlinkHref="#textcircle" >
               {props.text}
               </textPath>
           </text>
       </svg>
       </div>
    );
}

export default Circlepath;
