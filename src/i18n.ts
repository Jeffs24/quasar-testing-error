import { createI18n } from 'vue-i18n';

export default createI18n({
  globalInjection: true,
  legacy: true,
  allowComposition: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      hello: 'hello!',
    },
  },
});
