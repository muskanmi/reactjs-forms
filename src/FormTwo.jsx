import React, { useState } from 'react';

function FormTwo() {

    const [name, setName] = useState("");
    const [fullName, setFullName] = useState();

    const[lastname, setlastname] = useState("");
    const [lname, setlname] = useState();

    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(name);
        setlname(lastname);
    }
    const inputEvent = (event) => {
        setName(event.target.value);
    }

    const inputEventTwo = (event) => {
        setlastname(event.target.value);
    }
  return (
    <>
        <div className='main_div'>
            <form onSubmit={onSubmits}>
                <div>
                    <h1> Hello {fullName} {lname}  </h1>
                    <input
                    type='text'
                    placeholder='Enter Your Name'
                    onChange={inputEvent}
                    value={name}></input>
                    {/* <br /> */}
                    <input
                    type='text'
                    placeholder='Enter Your Last Name'
                    onChange={inputEventTwo}
                    value={lastname}></input>

                    <button type='submit'>Submit Me </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default FormTwo;