import React from 'react'
import {AiOutlineMenu,AiOutlineClose, AiOutlineMail} from 'react-icons/ai';
import {FaGithub,FaLinkedin} from "react-icons/fa";
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {FaFilePdf } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Main = () => {
  return (
    <div id='Main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-white-600'>Lets Build Together</p>
                <h1 className='py-4 text-white-700'>Hi, My Name <span className='text-[#bdbdff]'>Angjelo</span></h1>
                <h1 className='py-2 text-white-700'>An Aspiring Software Developer</h1>
                <p className='py-4 text-white-600 max-w-[%70] m-auto'>I am software developer. Currently working to evolve my knowledge in both frontend and backend software development.</p>
                <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-white-400 p-6 cursor-pointer hover:scale-210 ease-in duration-300 m-auto'>
                        <Link href='https://www.linkedin.com/in/angjelo-mana-66a4a5280/' target='_blank'>
                        
                        <FaLinkedin/>
                        </Link>
                       
                    </div>
                    <div className='rounded-full shadow-lg shadow-white-400 p-6 cursor-pointer hover:scale-210 ease-in duration-300 m-auto'>
                        <Link href='https://github.com/Angjelo154/' target='_blank'>
                        <FaGithub/>
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-white-400 p-6 cursor-pointer hover:scale-210 ease-in duration-300 m-auto'>
                    <a href='/pdfFiles/Resume.pdf' target='_blank'>
                        <FaFilePdf/>
                    </a>
                    </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main