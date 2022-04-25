import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='bg-gradient-to-br from-blue-300 h-min align-center to-blue-700 p-3 px-6 flex justify-between'>
            <Link href="/">
                <a className='text-2xl transition duration-200 hover:font-bold text-white'>Flee Market</a>
            </Link>
            <Link href="/donate">
                <a className='text-2xl text-white'>Donations</a>
            </Link>
        </div>
    )
}