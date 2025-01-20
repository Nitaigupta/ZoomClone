import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import MobileNav from '../MobileNav'
const NavBar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href = "/" className='flex items-center gap-1'>
          <Image
            src = "/icons/logo.svg"
            width={32}
            height={32}
            alt="Mooz"
            className='max-sm:size-10'
          />
          <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Mooz</p>
      </Link>
      <div className="ml-auto flex items-center gap-8">
        <Link href = "/schedule" className='flex items-center gap-8'>
          <p className='text-[22px] text-white max-sm:hidden'>Schedule</p>
        </Link>
        <Link href = "/join" className='flex items-center gap-8'>
          <p className='text-[22px] text-white max-sm:hidden'>Join</p>
        </Link>
        <Link href = "/profile" className='flex items-center gap-8'>
          <p className='text-[22px] text-white max-sm:hidden'>Profile</p>
        </Link>
      </div>
      <div className='flex-between gap-5'>

      </div>
      <MobileNav/>
    </nav>
  )
}

export default NavBar
