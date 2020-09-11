import React from 'react'
import '../static/css/ITT.css'

const ITT = (props) => {
   return (
      <div className="ITT" >
         <h2> {props.title} </h2>
         <p> {props.text} </p>
      </div>
   )
}

export default ITT