import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='bg-gradient-to-br from-blue-300 h-min align-center to-blue-700 p-3 px-6 flex justify-between'>
            <Link href="/">
                <a className='ring-2 ring-yellow-500 text-xl font-bold p-1 rounded transition-all duration-200 hover:bg-yellow-400 hover:text-blue-800 text-white'>Flee Market</a>
            </Link>
            <p></p>
            <Link href="/donate">
                <a className='text-2xl text-white'>Donations</a>
            </Link>
            <Link href="/entertainment">
                <a className='text-2xl text-white'>Entertainment</a>
            </Link>
            <Link href="/about">
                <a className='text-2xl text-white'>About</a>
            </Link>
        </div>
    )
}