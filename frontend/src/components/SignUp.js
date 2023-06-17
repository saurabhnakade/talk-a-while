import React, { useState } from 'react'

const SignUp = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        img:{}
    })

    const inputChangeHandler=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]:e.target.id==='img'?e.target.files[0]:e.target.value
        })
    }

    const formSubmitHandler=(e)=>{
        e.preventDefault();

        console.log(formData)
    }

  return (
    <form onSubmit={formSubmitHandler} className='flex flex-col'>
        <input type="text" id="name" placeholder='Name' onChange={inputChangeHandler} className='px-4 py-3 w-[30rem] mb-10 rounded-lg focus:outline-none'/>
        <input type="text" id="email" placeholder='Email Address'  onChange={inputChangeHandler} className='px-4 py-3 w-[30rem] mb-10 rounded-lg focus:outline-none' pattern="[a-zA-Z0-9._%+-]+@[a-z]+\.com$" title="Enter a valid email"/>
        <input type="password" id="password" placeholder='Password'  onChange={inputChangeHandler} className='px-4 py-3 w-[30rem] mb-10 rounded-lg focus:outline-none'/>
        <input type="text" id="confirmPassword" placeholder='Confirm Password'  onChange={inputChangeHandler} className='px-4 py-3 w-[30rem] mb-10 rounded-lg focus:outline-none'/>
        <label  className='font-bold ml-4'>Your Picture</label>
        <input id="img" type="file" placeholder='Your Picture'  onChange={inputChangeHandler} className='px-4 py-3 w-[30rem] mb-10 rounded-lg focus:outline-none'/>
        <button className='w-[30rem] px-4 py-2 bg-white font-bold rounded-xl focus:outline-none'>Sign Up</button>
    </form>
  )
}

export default SignUp