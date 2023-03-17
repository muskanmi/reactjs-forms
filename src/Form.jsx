import React, { useState } from 'react';


const Form = () => {

    const [name, setName] = useState("");
    const [val, setVal] = useState();

    function onSubmit(event) {
        // console.log(event.target.value);  always recieves an object (we can access the value using that object)
        setName(event.target.value);
    }

    function inputEvent() {
        setVal(name);
    }
    return (
    <>
        <div> 
            <h1> Hello {val} </h1>
            <input type='text' placeholder='Enter Your Name' onChange={onSubmit} value={name}></input>
            <button onClick={inputEvent}> Click Me </button>
        </div>
    </>
    );
}

export default Form;