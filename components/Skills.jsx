import Image from 'next/image'
import React from 'react'
import Html from '../public/assets/html.png';
import Css from '../public/assets/css.png';
import Javascript from '../public/assets/javascript.png';
import ReactJS from '../public/assets/react.png';
import Tailwind from '../public/assets/tailwind.png';
import Github from '../public/assets/tailwind.png';
import Firebase from '../public/assets/firebase.png';
import NextJS from '../public/assets/nextjs.png';
import AWS from '../public/assets/aws.png';
import Typscript from '../public/assets/typescript.png';
import Cplus from '../public/assets/C++.png';
import Java from '../public/assets/Java.png';
import mySQL from '../public/assets/mysql.png';

const Skills = () => {
  return (
    <div id='Skills' className='w-full lg:h-screen p-5'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full my-20'>
        <p className=' text-xl tracking-widest uppercase text-[#bdbdff]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html}width='64' height='64' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Css}
                         width='64' 
                         height='64'
                         alt=''/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Javascript}
                         width='64' 
                         height='64'
                         alt=''/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Javascript</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Tailwind}
                         width='64' 
                         height='64'
                         alt=''/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tailwind</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={ReactJS}
                         width='64' 
                         height='64'
                         alt=''/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={NextJS}
                         width='64' 
                         height='64'
                         alt=''/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Next.js</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Firebase}
                         width='64' 
                         height='64'
                         alt=''/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Firebase</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Github}
                         width='64' 
                         height='64'
                         alt=''/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Github</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={AWS}
                         width='64' 
                         height='64'
                         alt=''/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>aws</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Cplus}
                         width='64' 
                         height='64'
                         alt=''/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>C++</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Java}
                         width='64' 
                         height='64'
                         alt=''/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Java</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={mySQL}
                         width='64' 
                         height='64'
                         alt=''/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>MySQL</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Typscript}
                         width='64' 
                         height='64'
                         alt=''/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Typescript</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Skills