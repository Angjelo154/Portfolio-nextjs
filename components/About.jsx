import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Profile from '../public/assets/portProfile.jpg';

const About = () => {
  return (
    <div id ='About' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#bdbdff]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p> I am currently working towards a degree in Computer Science. Academics are very important to me and I pride myself on my hard work ethic. 
                    I enjoy learning more about web development and backend development. In addition to programming languages, I also have experience with TypeScript,
                     and React. I am currently trying to increase my knowledge in other frameworks and backend knowledge.
                </p>
                <Link href='#Projects'>
                    <p className='py-2 text-black-600 underline cursor-pointer'>Check out some of my projects</p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' width='450' height='250' src= {Profile} alt='/'/>
            </div>
        </div>
    </div>
  )
}

export default About