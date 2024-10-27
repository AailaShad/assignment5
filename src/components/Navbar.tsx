import React from 'react'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='container pt-8'>
<div className='flex justify-between items-center'>
<div className='text-left font-extrabold text-5xl text-yellow-400'><i>Aaila Shad</i></div>

    <div className='font-bold text-yellow-400 text-2xl'>
    <ul className='gap-10 lg:gap-16 hidden md:flex'>
    <li className='menuLink'><a href='#hero'><i>Home</i></a></li>
    <li className='menuLink'><a href='#about'><i>About</i></a></li>
    <li className='menuLink'><a href='#project'><i>Project</i></a></li>
    <li className='menuLink'><a href='#skills'><i>Skills</i></a></li>
    <li className='menuLink'><a href='#contact'><i>Contact</i></a></li>
    </ul>

    <IoMdMenu className='md:hidden' size={30}  />
    </div>


</div>
    </div>
  );
};

export default Navbar






