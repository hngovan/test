import React from 'react'
import { useTranslation } from 'react-i18next'
import { Collapse, type CollapseProps } from 'antd'
import { LanguagePicker } from './LanguagePicker'
import { ThemePicker } from './ThemePicker'

export const SettingsOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation()

  const items: CollapseProps['items'] = [
    {
      key: 'languagePicker',
      label: t('header.changeLanguage'),
      children: <LanguagePicker />
    },
    {
      key: 'themePicker',
      label: t('header.changeTheme'),
      children: <ThemePicker />
    }
  ]

  return (
    <div {...props}>
      <Collapse items={items} bordered={false} expandIconPosition='end' ghost defaultActiveKey='themePicker' />
    </div>
  )
}
