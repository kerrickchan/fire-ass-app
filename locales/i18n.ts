import i18n from 'i18next'
import { getLocales } from 'expo-localization'
import { initReactI18next } from 'react-i18next'
import * as zh from './zh'
import * as en from './en'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: getLocales()[0].languageCode,
  fallbackLng: 'zh',
  resources: {
    en,
    zh,
  },
});

export default i18n
