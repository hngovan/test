import React from 'react'
import { sidebarNavigation, SidebarNavigationItem } from './sidebarNavigation'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import { ThemeType } from '@/interfaces/interfaces'

interface SiderContentProps {
  theme: ThemeType
  setCollapsed: (isCollapsed: boolean) => void
}

const sidebarNavFlat = sidebarNavigation.reduce(
  (result: SidebarNavigationItem[], current) =>
    result.concat(current.children && current.children.length > 0 ? current.children : current),
  []
)

export const SiderMenu: React.FC<SiderContentProps> = ({ setCollapsed, theme }) => {
  const { t } = useTranslation()

  const location = useLocation()

  const currentMenuItem = sidebarNavFlat.find(({ url }) => url === location.pathname)
  const defaultSelectedKeys = currentMenuItem ? [currentMenuItem.key] : []

  const openedSubmenu = sidebarNavigation.find(({ children }) => children?.some(({ url }) => url === location.pathname))

  const defaultOpenKeys = openedSubmenu ? [openedSubmenu.key] : []

  return (
    <Menu
      theme={theme}
      mode='inline'
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      onClick={() => setCollapsed(true)}
      items={sidebarNavigation.map(nav => {
        const isSubMenu = nav.children?.length
        return {
          key: nav.key,
          title: t(nav.title),
          label: isSubMenu ? t(nav.title) : <Link to={nav.url || ''}>{t(nav.title)}</Link>,
          icon: nav.icon,
          children:
            isSubMenu &&
            nav.children &&
            nav.children.map(childNav => ({
              key: childNav.key,
              label: <Link to={childNav.url || ''}>{t(childNav.title)}</Link>,
              title: t(childNav.title)
            }))
        }
      })}
      className='h-[calc(100vh-3.125rem)] overflow-y-auto overflow-x-hidden border-0 md:h-[calc(100vh-4.375rem)]'
      style={{ scrollbarWidth: 'none' }}
    />
  )
}
