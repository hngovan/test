import { useMemo } from 'react'
import { useResponsive } from '@/hooks/useResponsive'
import Sider from 'antd/es/layout/Sider'
import { SiderMenu } from './SiderMenu'
import { SiderLogo } from './SiderLogo'
import Overlay from '@/components/common/Overlay/Overlay'

interface MainSiderProps {
  isCollapsed: boolean
  setCollapsed: (isCollapsed: boolean) => void
}

export const MainSider: React.FC<MainSiderProps> = ({ isCollapsed, setCollapsed, ...props }) => {
  const { isDesktop, mobileOnly, tabletOnly } = useResponsive()

  const isCollapsible = useMemo(() => mobileOnly && tabletOnly, [mobileOnly, tabletOnly])

  const toggleSider = () => setCollapsed(!isCollapsed)

  return (
    <>
      <Sider
        trigger={null}
        collapsed={!isDesktop && isCollapsed}
        collapsedWidth={tabletOnly ? 80 : 0}
        collapsible={isCollapsible}
        width={260}
        {...props}
      >
        <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
        <div className='h-[calc(100vh - h-mobile-header)] md:h-[calc(100vh - h-desktop-header)] overflow-y-auto overflow-x-hidden'>
          <SiderMenu theme={'dark'} setCollapsed={setCollapsed} />
        </div>
      </Sider>
      {mobileOnly && <Overlay onClick={toggleSider} show={!isCollapsed} />}
    </>
  )
}
