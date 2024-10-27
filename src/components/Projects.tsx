import React from 'react';
import Heading from './Heading';
import Card from './Card';
const data=[
{
    id:0,
    title: "Milestone 1",
    desc: "A typeScript-based interactive resume built with HTML and CSS,allowing users to showcase their skills dynamically",
    img:"/milestone1.png",
    tags:["CSS","HTML","Node","TypeScript"]
},


{
    id:1,
    title: "Milestone 3",
    desc: "A typeScript-based interactive resume built with HTML and CSS,allowing users to showcase their skills dynamically",
    img:"/milestone 3.png",
    tags:["CSS","HTML","Node","TypeScript"]
},


]

const Projects = () => {
  return (
    <div id='project' className='container pt-32'>
      <div className='text-yellow-400'><Heading  title='My Projects'/></div>

      <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-2 place-items-center '>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>

    </div>
  )
}

export default Projects
 

{/* <div className='grid gap-1 xl:gap-0 xl-gap-y-2 md:grid-cols-2 lg:grid-cols-2 place-items-center'> */}

