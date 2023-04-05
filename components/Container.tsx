
import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className='
        max-w-[250px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        xs:px-4'
    >
        {children}
    </div>
  )
}