import { Dates } from '@/constants/Date'
import { LanguageType } from '@/interfaces/interfaces'
import { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const localLanguage = (localStorage.getItem('lang') as LanguageType) || 'vn'

export const useLanguage = (): { language: LanguageType; setLanguage: (locale: LanguageType) => Promise<void> } => {
  const { i18n } = useTranslation()

  const handleChangeLanguage = useCallback(
    async (locale: LanguageType) => {
      Dates.setLocale(locale)
      localStorage.setItem('lang', locale)
      await i18n.changeLanguage(locale)
    },
    [i18n]
  )

  useEffect(() => {
    localLanguage && handleChangeLanguage(localLanguage)
  }, [handleChangeLanguage])

  return useMemo(
    () => ({ language: i18n.language as LanguageType, setLanguage: handleChangeLanguage }),
    [handleChangeLanguage, i18n.language]
  )
}
