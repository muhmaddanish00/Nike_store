import Image from 'next/image'
import React from 'react'
import hero from './assets/shoe_image.png'
import Button from './Button'
import icon1 from './assets/amazon.svg'
import icon2 from './assets/flipkart.svg'
const Hero = () => {
    return (
        <section className='w-[70%] mx-auto mt-20'>
            <div className='flex justify-center items-center '>
                <div className='w-[50%] '>
                    <h1 className='text-7xl font-extrabold mb-7'>YOUR FEET
                        DESERVE
                        THE BEST</h1>
                        <p className='w-[82%]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                        <div className='space-x-12 mt-4'>

                        <Button text='Shop Now' bg='bg-red-500'/>
                        <Button text='Category' />
                        </div>
                            <p className='text-sm font-light mt-2'>Also Available On</p>
                        <div className='flex space-x-2 mt-2'>
                            <Image src={icon1} height={30} width={30} alt='icon'/>
                            <Image src={icon2} height={20} width={20} alt='icon'/>
                        </div>
                </div>
                <div>
                    <Image src={hero} width={500} height={200} alt='hero-image'/>
                </div>
            </div>



        </section>
    )
}

export default Hero
