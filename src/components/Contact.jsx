import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                Get IN
                <span className='text-purple'> Touch</span>

            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Feel free to reach outLet's Talk</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w 5xl mx-auto'>
                <div>
                    <form className='space y-6'>
                        <div>
                            <label htmlFor="name " className='block text-gray-300 mb-2'>Your Name</label>
                            <input
                            className='w-full bg-dark-300 border border-dark-400 rounded-lg px'
                             type="text" />
                        </div>

                    </form>
                </div>

            </div>

        </div>
      
    </motion.div>
  )
}

export default Contact
