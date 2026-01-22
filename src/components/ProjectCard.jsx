import React from 'react'


const ProjectCard = ({title,description,image,tech}) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
        <img src={image} alt={title} className='w-full h-60 object-center object-fill '/>
        <div className='p-6 space-y-3'>
            <h3 className='text-3xl font-semibold'>{title}</h3>
            <p>{description}</p>
            <div className='flex items-center gap-2 flex-wrap text-sm text-gray-400'>
                {tech.map((item,index) => (
                    <span key={index} className=''>
                        {item}
                    </span>
                ))}
            </div>


        </div>
      
    </div>
  )
}

export default ProjectCard
   