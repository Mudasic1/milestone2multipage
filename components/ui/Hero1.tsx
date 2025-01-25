"use client"


import '@/components/hero.css'
import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';

const roboto = Roboto_Mono({subsets:['latin'], weight:'400'})
const Hero1 = () => {
  return (
    <div className={`hero1 ${roboto.className}`}>
        <div className='hero1 flex justify-between pr-[50px]'>

            {/* left */}
            <div>
        <h1>Navigating the digital landscape for success</h1>
        <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <button className='mt-5'>Book a consultation</button>
        </div>

            {/* right */}
        <div>
        <Image src={'/heroimage.png'} alt={'heroimage'} width={500} height={500}/>
        </div>
        </div>
    </div>
  )
}

export default Hero1