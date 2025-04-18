import React, { useState } from 'react'

function Form() {
    const[inputs,setInputs] = useState({
  
    })

     const box ={
        color : 'red',
        shape : 'rectangle'
    }

    box.color
    const buttonClick = () => {
        // alert('Name is ${inputs}')
        document.getElementById('display').innerHTML = `Name is : ${inputs.username}` +` <br>` + `Age is : ${inputs.age}`
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    }
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs({...inputs, [name] : value})

    }
    const [car, setCar] = useState({
        color : 'red',
        name : 'creta',
        year : '1965'


    })
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input  type = "text" name = "username" value={inputs.username} onChange={handleChange}/><br></br>
        <label>Age:</label>
        <input type="number" name = "age" value={inputs.age} onChange={handleChange}/>
        <button onClick={buttonClick}>submit </button>
        <div id = 'display'></div>
        {/* color : {car.color},name: { car.name} , year : {car.year} */}
    {/* <button onClick = {()=> setCar({color : 'black'})} */}
       
    </form>
    </div>
  )
}

export default Form