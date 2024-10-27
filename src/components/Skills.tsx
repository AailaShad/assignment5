import React from 'react'

const Skills = () => {
  return (
    <div  id='skills'className='container pt-32'>
      <div className='grid md:cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl text-yellow-300'>Technologies I work with</h2>
          <p className='text-pink-500 pt-2'>
            I am a student of GIAIC ,I have learnt HTML ,CSS ,TypeScript and now I am learning Next.js.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
            </div>

            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
            </div>




          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills

