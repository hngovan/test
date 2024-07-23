// import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown'
// import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown'
import { Row, Col, Button } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { ThemePicker } from './components/ThemePicker'

interface MobileHeaderProps {
  toggleSider: () => void
  isSiderOpened: boolean
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleSider, isSiderOpened }) => {
  return (
    <Row justify='space-between' align='middle'>
      <Col>{/* <ProfileDropdown /> */}</Col>
      <Col>
        <Row align='middle'>
          <Col>
            <ThemePicker />
          </Col>
        </Row>
      </Col>
      <div className='z-50 flex'>
        <Button
          type='text'
          icon={isSiderOpened ? <CloseOutlined /> : <MenuOutlined />}
          onClick={toggleSider}
          className='h-[50px] text-base'
        />
      </div>
    </Row>
  )
}
