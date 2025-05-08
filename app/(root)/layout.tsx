import Navbar from '@/components/Navbar'
import React from 'react'

interface LandingLayoutProps {
    children: React.ReactNode
}

const LandingLayout = ({children}: LandingLayoutProps) => {
  return (
    <div className='bg-[#0d2845] h-full'>
          <Navbar />
      {children}</div>
  )
}

export default LandingLayout