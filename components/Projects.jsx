import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProjectItems from './ProjectItems'
import LEVINimg from '../public/assets/LEVIN_DEMO.png'
import NFTimg from '../public/assets/NFT_demo.png'
import TeslaImg from '../public/assets/Tesla_demo.png'

const Projects = () => {
  return (
    <div id='Projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#bdbdff]'>Projects</p>
        <h2 className='py-4'>What I Have Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItems
                title='LEVIN Website'
                backgroundImg={LEVINimg}
                framework='React JS'
                
            />
            <p>Collaborated and helped design a full-stack website that allows any user to create dynamic sitemaps. This website uses JavaScript, HTML, CSS, SQL, Spring Boot, And React JS.
                Integrated the Konva API to allow users to use containers to help them build their dream website using sitemaps.
            </p>
            <ProjectItems
                title='Tesla Website'
                backgroundImg={TeslaImg} 
                framework='Redux'  
            />
            <p>Built an online website using JavaScript, Styled Components, and Redux that allows users to experience the different models of cars Tesla has to offer. 
               This app also features important information that offers a unique experience to users learning more about electric cars.
            </p>
            <ProjectItems
                title='NFT Project'
                backgroundImg={NFTimg}
                framework='Java'
            />
            <p>Created a full-stack NFT website using Java, HTML, CSS, and MySQL to implement interfaces that simulate the buying, trading, and selling of NFT’s.
            Implemented a Java control servlet to control the application’s flow from one user interaction to another.
            </p>

        </div>
    </div>
</div>
  )
}

export default Projects