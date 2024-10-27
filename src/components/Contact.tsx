import React from 'react'
import { LuMail } from "react-icons/lu";
import { BsTelephoneOutboundFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
<div className='gridbmd:grid-clos-2 gap-10 '>
    <div className='space-y-8'>
<h2 className='text-yellow-400 text-5xl'data-aos="zoom-in-up">Get at touch</h2>
<p className='text-pink-500 text-[18px] pt-2'data-aos="zoom-in-up">Drop me ,Call me OR send me message by submitting the form.</p>
<div className='flex gap-3 items-center'data-aos="zoom-in-up">
    <LuMail size={30} />abc@gmail.com
</div>

<div className='flex gap-3 items-center'data-aos="zoom-in-up">
<BsTelephoneOutboundFill size={30} />(021)000-000

</div>
    </div>
    <div className='space-y-8'>
<div className='flex flex-col gap-1' data-aos="zoom-in-up">
    <label htmlFor="name">Name</label>
    <input type="text"
    className='h-[40px] bg-transparent border border-yellow-400'
    id='name'/>
</div>

<div className='flex flex-col gap-1'data-aos="zoom-in-up">
    <label htmlFor="email">Email</label>
    <input type="text"
    className='h-[40px] bg-transparent border border-yellow-400'
    id='email'/>
</div>

<div className='flex flex-col gap-1'data-aos="zoom-in-up">
    <label htmlFor="message">Message</label>
    <textarea 
    className='bg-transparent border border-yellow-400'
    id='message' rows={8}>
    </textarea>
</div>
<button className='bg-yellow-400 p-2 px-6'data-aos="zoom-in-up" >Send</button>
    </div>
</div>
    </div>
  )
}

export default Contact