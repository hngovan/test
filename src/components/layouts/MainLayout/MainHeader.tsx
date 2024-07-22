import { Header } from 'antd/es/layout/layout'

interface MainHeaderProps {
  children?: React.ReactNode
}

export const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
  return (
    <Header className='h-mobile-header p-0 md:h-desktop-header md:px-desktop-horizontal md:py-desktop-vertical'>
      {children}
    </Header>
  )
}
