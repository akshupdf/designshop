import React from 'react'

export default function About() {
  return (
    <div className='w-[100%] flex lg:flex-row sm:flex-col  bg-black lg:h-screen overflow-hidden' name="about">
             <div className='lg:w-[50%] justify-center flex items-center lg:mt-0 sm:mt-10'>
    <img src="https://i.pinimg.com/originals/ba/b4/7e/bab47e473a2d906ed285424e8a6b13f3.gif" alt="hero" className='w-[90%] rounded-xl lg:h-[70%] ' />
</div>
        <div className='lg:w-[50%] text-white items-center flex flex-col pt-40 lg:mb-0 sm:mb-8'>
        <h1 className='  text-4xl '>About Us</h1>
        <p className='w-[90%] mt-8 text-xl'>
        Welcome to The Design Shop. We are passionate about innovation and attention to detail, this studio delivers unique, immersive digital experiences tailored to elevate your brand. Each design is a blend of art and technology, created to captivate and inspire.
        </p>
        </div>
   
    </div>
  )
}
