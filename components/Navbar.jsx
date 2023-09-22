"use client";
import React, { useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import {FaGithub,FaLinkedin} from "react-icons/fa";
import {FaFilePdf } from 'react-icons/fa';
import NavLogo from '../public/assets/LOGO.png';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
      };


useEffect(()=>{
    const handleShadow = () =>{
        if(window.scrollY >= 90){
            setShadow(true);
        }
        else{
            setShadow(false);
        }
    };
    window.addEventListener('scroll',handleShadow);
},[])

  return (
    <div id='Navbar' className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href=''>
            <Image className='hidden md:flex' src={NavLogo} width='80'height='50'/>
        </Link>
        <div>
            <ul className='hidden md:flex'>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b '>Home</li>
                </Link>
                <Link href='/#About'>
                    <li className='ml-10 text-sm uppercase hover:border-b '>About</li>
                </Link>
                <Link href='/#Skills'>
                    <li className='ml-10 text-sm uppercase hover:border-b '>Skills</li>
                </Link>
                <Link href='/#Projects'>
                    <li className='ml-10 text-sm uppercase hover:border-b '>Projects</li>
                </Link>
                <Link href='/#Contact'>
                    <li className='ml-10 text-sm uppercase hover:border-b '>Contact</li>
                </Link>
            </ul>
            <div
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div 
        className={
          !nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            !nav
              ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#303030] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
            <div>
                <div className='flex w-full items-center justify-between'>
                    <Link href=''>
                        <Image src={NavLogo} width='87'height='35'/>
                    </Link>
                <div 
                onClick={handleNav}
                 className='rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer '>
                    <AiOutlineClose size={25}/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>Lets Build Together</p>
            </div>
         </div>
         <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
                <Link href='/#Main'>
                <li className='py-4 text-sm '>Home</li>
                </Link>
                <Link href='/#About'>
                <li className='py-4 text-sm '>About</li>
                </Link>
                <Link href='/#Skills'>
                <li className='py-4 text-sm '>Skills</li>
                </Link>
                <Link href='/#Projects'>
                <li  className='py-4 text-sm '>Projects</li>
                </Link>
                <Link href='/#Contact'>
                <li className='py-4 text-sm '>Contact</li>
                </Link>
            </ul>  
            <div className='pt-40'>
                <p className='uppercase tracking-widest text-[#d1d1d1]'>Lets Connect</p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <div className='rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-210 ease-in duration-300'>
                        <Link href='https://www.linkedin.com/in/angjelo-mana-66a4a5280/' target='_blank' rel='noreferrer'>
                            <FaLinkedin/>
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-210 ease-in duration-300'>
                        <Link href='https://github.com/Angjelo154' target='_blank' rel='noreferrer'>
                            <FaGithub/>
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-210 ease-in duration-300'>
                        <a href='/pdfFiles/Resume.pdf' target='_blank' rel='noreferrer'>
                            <FaFilePdf/>
                        </a>
                    </div>
                </div>
            </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar