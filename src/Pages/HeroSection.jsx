import React,{useRef} from 'react'
import {motion, useScroll, useTransform, useMotionValueEvent} from 'framer-motion'
import Navbar from '../Components/Navbar';

function HeroSection() {
    const heroRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: heroRef,
        offset: ["start end", "end start"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150,-150]);

    useMotionValueEvent(scrollYProgress, 'change', (latestValue) => {
        console.log(latestValue)
    })

  return (
    <>
    <div className="bg-white p-4">
    <section ref={heroRef} className='pt-8 pb-20 rounded-3xl md:pt-5 md:pb-10 bg-[#EBEBEB] overflow-x-clip min-h-screen'>
      <Navbar />
        <div className="container">
            <div className='md:flex items-center'>
            <div className='md:w-[478px] lg:w-[1200px]'>
                <p className=' text-black mt-4 text-[90px] h-[50px] px-[100px]'>
                    At the Heart Of
                </p>
                <p className=' text-black text-[180px] h-[150px] px-[100px]'>
                    Healthcare
                </p>
                <p className=' text-black mt-12 text-[90px] px-[100px]'>
                    Bringing it All Togethger!
                </p>
                             
                <div className=' mt-14 mx-[250px]'>
                <p className='text-2xl text-[#010d3e] tracking-tight '>
                  MedLinkPro connects doctors,  patients, pharmacies,
                </p>
                <p className='text-2xl text-[#010d3e] tracking-tight '>
                   and labs for seamless healthcare. Experience
                </p>
                <p className='text-2xl text-[#010d3e] tracking-tight  '>
                  efficient, accurate care-all in one place.
                </p>
                
                </div>
                <div className="flex gap-5 px-14 pt-10 ">
                  <p className='text-xl'>Available On:</p>
                  <p className="text-[#0067FF] text-xl">Play Store</p>
                  <p>/</p>
                  <p className="text-[#0067FF] text-xl">
                    Apple Store
                  </p>
                </div>
            </div>
            
            </div>
        </div>
    </section>

    <div className="bg-[#0067FF] px-[68px] rounded-2xl mt-3 flex gap-14 p-3 overflow-clip">
      <p className='text-5xl text-white'>Connecting Care</p>
      <p className='text-5xl'>+</p>
      <p className='text-5xl text-white'>Connecting Care</p>
      <p className='text-5xl'>+</p>
      <p className='text-5xl text-white'>Connecting Care</p>
    </div>
    </div>

    
    </>
  )
}

export default HeroSection