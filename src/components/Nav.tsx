import Image from 'next/image'
import React from 'react'
import logo from './assets/brand_logo.svg'
import Button from './Button'
import Link from 'next/link'

const Nav = () => {
  return (
    <main className='w-[80%] mx-auto'>
        <div className='flex justify-between items-center mb-2 mt-3'>
            
            <div><Image src={logo} height={90} width={60} alt='logo' className='object-contain'/></div>
            <ul className='flex gap-4 text-md font-medium text-gray-700 '>
                <li className='hover:bg-gray-100 p-1'><Link href='#'>Menu</Link></li>
                <li className='hover:bg-gray-100 p-1'><Link href='#'>Location</Link></li>
                <li className='hover:bg-gray-100 p-1'><Link href='#'>About</Link></li>
                <li className='hover:bg-gray-100 p-1'><Link href='#'>Cantact</Link></li>
            </ul>
            <div>

            <Button text='Login' bg='bg-red-500'/>
            </div>
        </div>
            <div className='bg-gray-300 w-[98%] h-[1px] mt-4 mx-auto '/>
        
      
    </main>
  )
}

export default Nav
