import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu}  from 'react-icons/ai'
import {Link} from 'react-scroll'
import logo from '../images/logo.jpg'



const Navbar = () => {
  const [nav, setNav] = useState(false);


  const handleNav = () => { setNav(!nav); }

  const handleClose =()=> setNav(!nav)
  


  return (
<div className='w-[100%] bg-black flex lg:opacity-40 hover:opacity-80 justify-between items-center fixed z-20  text-white'>
  

<img src={logo} alt='logo '  className='w-20  '/>



      <ul className='hidden md:flex cursor-pointer'>
        <li className='p-4'><Link to="home" smooth={true} offset={50} duration={500} > Home</Link> </li>
        <li className='p-4'><Link to="about" smooth={true} offset={50} duration={500} > About Us</Link></li>
        <li className='p-4'><Link to="temp" smooth={true} offset={50} duration={500} > Templates</Link></li>
        <li className='p-4'><Link to="reach" smooth={true} offset={50} duration={500} > Reach Out</Link></li>
      </ul>
     

    <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
    </div>       
    <div className={nav ? 'fixed left-0 top-8 w-[60%] bg-black  h-full border-r border-r-gray-900 bg-gray-[#808080] ease-in-out duration-500' : 'fixed left-[-100%]'}>

    {/* <h1 className='w-full text-3xl font-bold  text-[#808080]'>Akshupdf </h1> */}

   
      <ul className=  ' pt-10'>
      <li className='p-4 border-b border-[#808080]'><Link onClick={handleClose} to="home" smooth={true} offset={50} duration={500} > Home</Link></li>
        <li className='p-4 border-b border-[#808080]'><Link onClick={handleClose} to="about" smooth={true} offset={50} duration={500} > About Us</Link></li>
        <li className='p-4 border-b border-[#808080]'><Link onClick={handleClose} to="temp" smooth={true} offset={50} duration={500} > Templates</Link></li>
        <li className='p-4 border-b border-[#808080]'><Link onClick={handleClose} to="reach" smooth={true} offset={50} duration={500} > Reach Out</Link></li>
      </ul>
    </div>
    </div>
  
  );
}

export default Navbar;
