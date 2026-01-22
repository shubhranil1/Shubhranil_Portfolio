import React from 'react'
import { easeOut, motion } from 'framer-motion'
import { GiDuration } from 'react-icons/gi'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-slate-900 via-slate-700 to-dark-100'

    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        {/* Left side contant */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 '>Hi I am <span>Shubhranil Chowdhury</span></h1>
          <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter '>Full Stack Developer </h2>
          <p className='text-lg text-gray-300 mb-8' >I create stunning web experiences with modern technolgies andpinovative design </p>
          <div className='flex space-x-4' >
            <a href="#projects" className='px-6 py-3  bg bg-purple rounded-lg font-medium hover:bg-purple-700 transti duration-300'>View Work</a>
            <a href="#contact" className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300'>Contact Me</a>

          </div>

        </div>
        {/* Right side image */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative w-60 h-60 md:w-80 md:h-80'>
            <div className='absolute inset-0 rounded-full bg-linear-to-r from-purple-500 to-pink-500 animate-pulse-slow opacity-70'>
              <motion.img 
              animate={{y:[0, -20, 0]}}
              transition={{duration:4,repeat:Infinity,repeatType:"loop",ease:"easeInOut"}}
              className='w-full h-full md:object-contain object-cover object-center rounded-full animate-float'
              src={assets.heroImg} alt="profile" />

            </div>

          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Hero
