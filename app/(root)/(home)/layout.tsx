import NavBar from '@/components/Navbar.tsx/page'
import SideBar from '@/components/Sidebar/page'
import React, { ReactNode } from 'react'

const HomeLayout = ({children}:{children: ReactNode}) => {
  return (
    <main className='relative'>
        <NavBar/>

        <div className='flex'>
            <SideBar/>
            <section className='flex min-h-screen flex-1 flex-col px-26 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                <div className='w-full'>
                    {children}
                </div>
            </section>
        </div>
    </main>
  )
}

export default HomeLayout
