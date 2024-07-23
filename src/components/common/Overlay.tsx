import React from 'react'

interface OverlayProps {
  show: boolean
  onClick: () => void
}

const Overlay: React.FC<OverlayProps> = ({ show, onClick }) => {
  return <div className={`absolute z-20 h-0 ${show ? 'h-screen w-screen backdrop-blur-sm' : ''}`} onClick={onClick} />
}

export default Overlay
