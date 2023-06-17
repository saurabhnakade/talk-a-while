import React, { useState } from 'react'
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const HomePage = () => {

  const [isLogin,setIsLogin]=useState(true);

  const s1=isLogin? "  bg-[#a8dae9]":"";
  const s2=!isLogin? " bg-[#a8dae9]":"";

  return (
    <div className='h-[100vh] flex flex-col items-center pt-16 bg-gradient-to-r from-[#83a4d4] to-[#b6fbff]'>
      <div className='font-serif tracking-wider italic text-center text-[3rem] w-[50rem] bg-white rounded-3xl mb-10 p-10'>
        Talk - A - While
      </div>
      <div className='w-[50rem] bg-white rounded-3xl'>
        <div className='text-center my-8 text-xl flex justify-around'>
          <button onClick={()=>setIsLogin(true)} className={'px-12 py-2 rounded-3xl'+s1}>Login</button>
          <button onClick={()=>setIsLogin(false)} className={'px-10 py-2 rounded-3xl'+s2}>Sign Up</button>
        </div>

        <div className='bg-gradient-to-r from-[#c5d6f0] to-[#adfbff] py-10 mb-10 mx-12 rounded-3xl flex flex-col items-center justify-center'>
          {isLogin && <Login/>}
          {!isLogin && <SignUp/>}
        </div>
      </div>
    </div>
  )
}

export default HomePage