import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='bg-gradient-to-br from-blue-100 h-min align-center to-white px-6 flex flex-col lg:flex-row justify-between align-center align-middle border-b-2 border-b-gray-300 lg:border-b-0 pb-1'>
            <div className='flex flex-row justify-center'>
                <Link href="/">
                    <a className='text-lg font-bold rounded transition-all duration-200 hover:text-yellow-700 p-1 border-b-2 border-dotted hover:border-b-yellow-800 text-black mr-8 text-center'>Flee Market</a>
                </Link>
                <div className='flex flex-col justify-center align-center'><span className='italic text-sm tracking-wider px-2 text-yellow-800 font-bold bg-gradient-to-br from-blue-100 to-blue-200 p-0.5 rounded-lg text-center'>Providing help to those who need it, come on the 8<sup>th</sup> May 2022 starting at 11.30 A.M.</span></div>
            </div>
            <div className='flex flex-col lg:flex-row flex-wrap align-middle justify-center'>
                {/* <Link href="/blog">
                    <a className='text-sm lg:text-lg text-black mx-10 transition-all duration-200 hover:text-yellow-700'>Blog</a>
                </Link> */}
                <Link href="/location">
                    <a className='text-center text-lg lg:text-lg text-blue-500 font-bold lg:text-black mx-10 transition-all duration-200 hover:text-yellow-700'>Info</a>
                </Link>
                <Link href="/donate">
                    <a className='text-center text-lg lg:text-lg text-blue-500 font-bold lg:text-black mx-10 transition-all duration-200 hover:text-yellow-700'>Donations</a>
                </Link>
                <Link href="/entertainment">
                    <a className='text-center text-lg lg:text-lg text-blue-500 font-bold lg:text-black mx-10 transition-all duration-200 hover:text-yellow-700'>Activities for kids</a>
                </Link>
                <Link href="/about">
                    <a className='text-center text-lg lg:text-lg text-blue-500 font-bold lg:text-black mx-10 transition-all duration-200 hover:text-yellow-700'>Contact</a>
                </Link>
            </div>
        </div>
    )
}