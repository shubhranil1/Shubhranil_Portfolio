import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'

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
                                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 otline-none'
                                    type="text" />
                            </div>
                             <div>
                                <label htmlFor="email " className='block text-gray-300 mb-2'>Email Address</label>
                                <input
                                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 otline-none'
                                    type="email" />
                            </div>
                             <div>
                                <label htmlFor="message " className='block text-gray-300 mb-2'>Message</label>
                                <textarea
                                    className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 otline-none'
                                    type="text" />
                            </div>
                            <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover: bg-purple-700 transition duration -300 coursor-pointer'>
                                Send

                            </button>



                        </form>
                    </div>
                    {/* contact info */}
                    <div className='space-y-8'>
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p>Dharma,Paschim Medinipur</p>
                            </div>

                        </div>

                    </div>
                    

                </div>

            </div>

        </motion.div>
    )
}

export default Contact
