
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Angjelo | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href='/LOGO.png'/>
      </Head>
    <Navbar/>
    <Main/>
    <About/>
    <Projects/>
    <Contact/>
    </div>
  )
}
