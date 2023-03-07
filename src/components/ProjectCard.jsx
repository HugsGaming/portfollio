import React from 'react'

function ProjectCard({image, title, description, url}) {
  return (
    <a href={url} className='flex flex-col mx-auto items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-xl hover:bg-gray-100 mt-6'>
      <img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={image} alt={`${title} image`}/>
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 font-normal text-gray-700'>{description}</p>
      </div>
    </a>
  )
}

export default ProjectCard