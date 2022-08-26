import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/lib/locale/es';
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: false,
      },
    themes: {
      light: {
        primary: '#3892d4',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#df0000',
        info: '#2196F3',
        success: '#00df7d',
        warning: '#FFC107',
        grisSencha: '#f5f5f5',
        bordesSencha: '#d1d0d0',
        azulSencha: '#3892d4',
      },
    },
  },
  lang: {
      locales: { es },
      current: 'es',
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});