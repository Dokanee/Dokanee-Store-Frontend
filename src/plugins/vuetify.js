import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        light: true,
        themes: {
          light: {
            primary: '#00B29C',
            secondary: '',
            accent: '',
            error: '#ff0000',
          },
          dark: {
            primary: '',
          },
        },
      },
});
