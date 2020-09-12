import React from 'react'
import '../static/css/ITT.css'

const ITT = (props) => {
   return (
      <div className="w250 borderBlack" >
         <p className="fontSize100"  >
            <i class={props.icon} ></i>
         </p>
         <h2 className="padding10" > {props.title} </h2>
         <p className="padding10"> {props.text} </p>
      </div>
   )
}

export default ITT