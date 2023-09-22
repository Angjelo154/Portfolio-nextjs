import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItems = ({title,backgroundImg,framework}) => {
return (
<div className='reletive flex items-center justify-between h-auto w-full shadow-xl shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] '>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/'/>
    <div className='hidden group-hover:block absolute translate-x-[100%] translate-y-[0%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{framework}</p>
        <Link href={'https://github.com/Angjelo154'}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
</div>
  )
}

export default ProjectItems