import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from '@/locales/en/translation.json'
import translationVN from '@/locales/vn/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  vn: {
    translation: translationVN
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // lng: 'vn', // if you're using a language detector, do not define the lng option
    fallbackLng: 'vn',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
