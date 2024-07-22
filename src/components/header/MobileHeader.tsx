// import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown'
// import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown'
import { Row, Col } from 'antd'
import { BurgerIcon } from '../common/Icons/BurgerIcon'

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
          <Col>{/* <SettingsDropdown /> */}</Col>
        </Row>
      </Col>

      <div className='z-50 flex'>
        <BurgerIcon onClick={toggleSider} isCross={isSiderOpened} />
      </div>
    </Row>
  )
}
