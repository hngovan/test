import { useState } from 'react'
import { Button, Popover } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { SettingsOverlay } from './SettingOverlay'

export const SettingsDropdown: React.FC = () => {
  const [isOpened, setOpened] = useState(false)

  return (
    <Popover content={<SettingsOverlay />} trigger='hover' onOpenChange={setOpened}>
      <Button size='large' icon={<SettingOutlined />} type={isOpened ? 'dashed' : 'text'} />
    </Popover>
  )
}
