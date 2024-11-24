import React from 'react'
import hero from "../images/here.jpg"

export default function Home() {
  return (
    <div className='w-[100%] flex bg-black h-screen overflow-hidden' name="home">
        <div className='w-[50%] text-white  m-auto '>
<h1 className='ml-10 text-4xl'>The Designs Shop</h1>
<p className='ml-10 text-xl mt-4'>🚀Web/App Design⚡️ | 🧑🏻‍🏫Education - UX UI design✍🏻 | ✨Branding🤝🏻 | 🙌🏻Collaboration ♥️</p>
        </div>
        <div className='w-[45%] mt-14 h-[90%] rounded-full overflow-hidden'>
    <img src={hero} alt="hero" />
</div>
    </div>
  )
}
