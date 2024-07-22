import React from 'react'
import { Spin } from 'antd'

interface LoadingProps {
  size?: 'small' | 'default' | 'large' | undefined
  tip?: React.ReactNode
}

export const Loading: React.FC<LoadingProps> = ({ tip, size }) => {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <Spin tip={tip} size={size} />
    </div>
  )
}
