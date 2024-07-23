import { SwitchTheme } from '@/components/common/SwitchTheme'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { ThemeType } from '@/interfaces/interfaces'
import { setTheme } from '@/store/slice/themeSlice'
import React from 'react'

export const ThemePicker: React.FC = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(state => state.theme.theme)

  const handleClickButton = (theme: ThemeType) => {
    dispatch(setTheme(theme))
  }

  return (
    <SwitchTheme
      isLightActive={theme === 'dark'}
      onClickDark={() => handleClickButton('dark')}
      onClickLight={() => handleClickButton('light')}
    />
  )
}
