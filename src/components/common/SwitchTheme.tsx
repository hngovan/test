import React from 'react'
import { Segmented } from 'antd'
import { SunFilled, MoonFilled } from '@ant-design/icons'

interface SwitchThemeProps {
  isLightActive: boolean
  onClickDark: () => void
  onClickLight: () => void
}

export const SwitchTheme: React.FC<SwitchThemeProps> = ({ isLightActive, onClickDark, onClickLight }) => {
  const options = [
    {
      value: 'light',
      label: <SunFilled />
    },
    {
      value: 'dark',
      label: <MoonFilled />
    }
  ]

  return (
    <Segmented
      options={options}
      value={isLightActive ? 'dark' : 'light'}
      onChange={value => {
        if (value === 'dark') {
          onClickDark()
        } else {
          onClickLight()
        }
      }}
    />
  )
}
