import React from 'react'

function AboutCard() {
  return (
    <div className='w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow mx-auto'>
      <div className="flex flex-col items-center pb-10">
        <img className='w-32 h-32 mb-3 rounded-full shadow-lg' src='/Profile.jpg' alt='Profile' />
        <h5 className='mb-1 text-xl font-medium text-gray-900'>Mark Joven Reyes</h5>
        <p className='text-sm text-gray-500 mb-4'>Web and Mobile Developer</p>
        <h6 className='text-lg'>Description</h6>
        <p className='text-center text-gray-900'>
          Mark Joven Reyes is a Full Stack Web Developer, that specializes in creating APIs for different business clients using
          either JavaScript or Java. He specializes on Frameworks like Node (Express) and SpringBoot to solve business problems for clients. He also has knowledge in Frontend
          Frameworks like Next.js and Astro.js with Tailwind as the CSS framework to provide clients with Frontend Solutions to businesses. He is also knowledgeable with other
          languages like C, C++, C# (DotNet), Python, and Go.
        </p>
        <h6 className='text-lg'>Educational Background</h6>
        <p className='text-center text-gray-900'>
          Mark Joven Reyes first studied at St. Raymonds during his Kindergarten in 2006 until he graduated in 2009, where he went to Sacred Heart School from Grade School to
          HighSchool from 2009 to 2019. He currently studies at iAcademy and is expected to graduate at 2025.
        </p>
        <h6 className='text-lg'>Career Experiences</h6>
      </div>
    </div>
  )
}

export default AboutCard