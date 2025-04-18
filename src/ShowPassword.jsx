// import React, { useState } from 'react'

// const ShowPassword = () =>{
//     const [show, setShow] = useState(false);

//   return (
//     <div>
//         <input type ={show ? "text" : "password"} placeholder ="Enter password"/>
//         <button onClick={()=> setShow(!show)}>
//         {show ? "Hide" : "show"}
//         </button>
//     </div>
//   );

// };

// export default ShowPassword


import react,{useState} from 'react'
const ShowPassword =() => {
const [show, setShow] = useState(false)
return(
<div>
    <input type = {show ? "text" : "password"} placeholder="Enter password"/>
    <button onClick={() => setShow(!show)}>{show ? "Hide" : "show"}</button>
</div>
 );
};
 export default ShowPassword


//  //ternary operator
//  let age = 18;
//  let canVote = age >= 18 ? "yes" : "No";
//  console.log(canVote);
// //trim()
// "text ".trim()

// //padstart or padend
//  "5".padStart(3, "0")  //"005"
//  "5",.padEnd(3,"0")//"500"    
 