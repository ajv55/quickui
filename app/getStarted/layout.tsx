import React from 'react'
import Sidebar from '../components/startComponents/sidebar'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex lg:flex-row'>
        <Sidebar />
        {children}
    </div>
  )
}
