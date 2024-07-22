interface BurgerProps {
  className?: string
  onClick: () => void
  children?: React.ReactNode
}

const Burger: React.FC<BurgerProps> = ({ className, onClick, children }) => (
  <svg width='1em' height='1em' viewBox='280 215 400 220' fill='currentColor' className={className} onClick={onClick}>
    {children}
  </svg>
)

interface BurgerProps {
  isCross?: boolean
  onClick: () => void
}

export const BurgerIcon: React.FC<BurgerProps> = ({ isCross, onClick }) => {
  const baseClasses = 'cursor-pointer transform transition-transform duration-500 ease-in-out'
  const topBottomClasses = `stroke-current stroke-[30px] ${
    isCross ? 'stroke-dashoffset-[-650px]' : 'stroke-dasharray-[240px_950px]'
  }`
  const middleClasses = `stroke-current stroke-[30px] ${
    isCross ? 'stroke-dashoffset-[-115px] stroke-dasharray-[1px_220px]' : 'stroke-dasharray-[240px_240px]'
  }`

  return (
    <Burger onClick={onClick} className={baseClasses}>
      <path
        d='M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200'
        id='top'
        className={topBottomClasses}
      />
      <path d='M300,320 L540,320' id='middle' className={middleClasses} />
      <path
        d='M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190'
        id='bottom'
        className={topBottomClasses}
      />
    </Burger>
  )
}
