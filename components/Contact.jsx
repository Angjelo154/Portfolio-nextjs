import React from 'react'
import Image from 'next/image';
import {AiOutlineMenu,AiOutlineClose, AiOutlineMail} from 'react-icons/ai';
import {FaGithub,FaLinkedin} from "react-icons/fa";
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import {FaFilePdf } from 'react-icons/fa';
import Link from 'next/link';
import ContactPic from "../public/assets/contact.jpg";


const Contact = () => {
  return (
<div id='Contact' className='w-full lg:h-screen'>
<div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
    <p className='text-xl tracking widest uppercase text-[#bdbdff]'>Contact</p>
    <h2 className='py-4'>Get In Touch</h2>
    <div className='grid lg:grid-cols-5 gap-8'>
        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-700 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
                <div>
                    <Image className='rounded-xl hover:scale-300 ease-in duration-300' width='350' height='450' src={ContactPic} alt="/"/>
                </div>
                <div>
                    <h2 className='py-2'>Angjelo Mana</h2>
                    <p>Software Developer</p>
                    <p className='py-4'>I am looking for interships and new opportunities. Contact me to discuss.</p>
                    <div>
            <p className='uppercase pt-8'>Connect with me</p>
            <div className='flex items-center justify-between py-4 '>
                <div className='rounded-full shadow-lg  p-6 cursor-pointer hover:scale-110 ease-in duration-300 m-auto'>
                    <Link href='https://www.linkedin.com/in/angjelo-mana-66a4a5280/' target='_blank'>
                        <FaLinkedin/>
                    </Link>
                </div>
                <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 m-auto'>
                    <Link href='https://github.com/Angjelo154' target='_blank'>
                        <FaGithub/>
                    </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-white-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 m-auto'>
                <a href='/pdfFiles/Resume.pdf' target='_blank'>
                        <FaFilePdf/>
                    </a>
                </div>
            </div>
        </div>
                </div>
            </div>
        </div>
        {/* right */}
        <div className='col-span-3 w-full h-auto shadow-gray-700 rounded-xl lg:p-4 '>
            <div className='p-4'>
                <form action="mailto:angjelomana1@gmail.com" method="post" enctype="text/plain">
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2 '> Name</label>
                            <input 
                            className='border-2 rounded-lg p-3 flex border-gray-700 text-black'
                            type="text"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'> Phone Number</label>
                            <input 
                            className='border-2 rounded-lg p-3 flex border-gray-700 text-black'
                            type="text"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'> Email</label>
                        <input
                        className='border-2 rounded-lg p-3 border-gray-700 text-black'
                        type="text"
                        />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Subject</label>
                        <input
                        className='border-2 rounded-lg p-3 border-gray-700 text-black'
                        type="text"
                        />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Message</label>
                        <textarea className='border-2 rounded-lg p-3 border-gray-700 text-black' rows='10'></textarea>
                    </div>
                    <div className=''>
                    <button className='border-2 background-none w-full p-4 border-gray-700 shadow-gray-800 mt-4 cursor-pointer'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div className='flex justify-center py-12 '>
        <Link href='/#Main'>
            <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 m-auto'>
                <HiOutlineChevronDoubleUp className='text-[#ffff]' size={30}/>
            </div>
        </Link>
    </div>
</div>
</div>
  )
}

export default Contact