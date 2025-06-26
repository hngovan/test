import React from 'react'
import { Row, Col, Button } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useResponsive } from '@/hooks/useResponsive'
import { SettingsDropdown } from './components/SettingsDropdown'
import { ProfileDropdown } from './components/ProfileDropdown'

interface DesktopHeaderProps {
  toggleSider: () => void
  isSiderOpened: boolean
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ toggleSider, isSiderOpened }) => {
  const { tabletOnly } = useResponsive()

  return (
    <Row justify='space-between' align='middle'>
      <Col>
        {tabletOnly && (
          <Button
            type='text'
            icon={isSiderOpened ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleSider}
            className='text-base'
          />
        )}
      </Col>
      <Col>
        <Row align='middle' justify='end' gutter={[5, 5]}>
          <Col>
            <SettingsDropdown />
          </Col>
          <Col>
            <ProfileDropdown />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
