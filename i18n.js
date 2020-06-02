const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  localePath: 'public/static/locales',
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  localeSubpaths: {
    de: 'de',
    en: 'en'
  },
})
