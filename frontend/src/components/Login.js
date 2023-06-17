import React, { useState } from 'react'

const Login = () => {
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })

    const inputChangeHandler=(e)=>{
        const object={
            ...formData,
            [e.target.id]:e.target.value
        }
        setFormData(object) 
    }

    const formSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(formData)
    }

  return (
    <form className='flex flex-col' onSubmit={formSubmitHandler}>
        <input pattern="[a-zA-Z0-9._%+-]+@[a-z]+\.com$" title="Enter a valid email" type="text" id="email" value={formData.email} onChange={inputChangeHandler} placeholder='Email Address' className='px-4 py-3 w-[30rem] mb-16 rounded-lg focus:outline-none'/>
        <input type="password" id="password" value={formData.password} onChange={inputChangeHandler} placeholder='Password' className='px-4 py-3 w-[30rem] mb-16 rounded-lg focus:outline-none'/>
        <button className='w-[30rem] px-4 py-3 bg-white font-bold rounded-xl'>Login</button>
    </form>
  )
}

export default Login