import React, { useState } from 'react';

function FormThree() {

    const [name, setName] = useState({
        fname: '',
        lname: '',
    });

    const inputEvent = (event) => {
        // console.log(event.target.value);
        // setName(event.target.value);
        // console.log(event.target.name);   // will return name value
        // console.log(event.target.placeholder ); // will return placeholder value

        // const value = event.target.value;
        // const name = event.target.name;

        // with object destructuring
        const  {value, name} = event.target; 

        // setName((prev) => {
        //     // console.log(prev);
        //     if(name === 'fName') {
        //         return {
        //             fname: value,
        //             lname: prev.lname,
        //         };
        //     } else if(name === 'lName'){
        //         return {
        //             fname: prev.fname,
        //             lname: value,
        //         };
        //     }
        // });

        // optimize the code  by using spread operator.
        setName((preValue) => {
            return{
                ...preValue,
                [name]: value,
            }
        });
    };

    const onSubmits = (event) => {
        event.preventDefault();
        alert('form submitted');
    }

  return (
    <>
        <div className='main_div'>
            <form onSubmit={onSubmits}>
                <div>
                    <h1> Hello {name.fname} {name.lname} </h1>
                    <input
                    type='text'
                    placeholder='Enter Your Name'
                    name='fname'
                    onChange={inputEvent}
                    value={name.fname}
                    ></input>
                    {/* <br /> */}
                    <input
                    type='text'
                    placeholder='Enter Your Last Name'
                    name='lname'
                    onChange={inputEvent}
                    value={name.lname}
                    ></input>

                    <button type='submit'>Submit Me </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default FormThree;