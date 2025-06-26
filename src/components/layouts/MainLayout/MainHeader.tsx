import { Header } from 'antd/es/layout/layout'

interface MainHeaderProps {
  children?: React.ReactNode
}

export const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
  return (
    <Header className='h-mobile-header border-b border-[#e5e7eb] bg-white px-desktop-margin-horizontal leading-normal md:h-desktop-header md:px-desktop-horizontal md:py-desktop-vertical dark:border-[#1f2e3d] dark:bg-[#001529]'>
      {children}
    </Header>
  )
}
