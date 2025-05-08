import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <div className='h-screen flex w-full items-center justify-center bg-[#0d2845]'>{children}</div>
  )
}

export default AuthLayout