import React, {useState, useEffect} from 'react'

const Test = () => {
   const [ count, setCount ] = useState(0); 
   useEffect(
         () => {
               console.log(count);
         },
         [ count ]
      );

   return (
      <div>
         <p>{count}</p>
         <button onClick={() => setCount(count + 1)}>カウント</button>
      </div>
   )
}

export default Test
