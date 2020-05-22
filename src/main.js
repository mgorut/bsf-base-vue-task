import Vue from 'vue'
import App from './App.vue'

import FlashMessage from '@smartweb/vue-flash-message';
import Router from './routes';
import {util} from './helpers/utils';

Vue.config.productionTip = false;
Vue.prototype.$func = util;
Vue.use(FlashMessage);

new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app')
