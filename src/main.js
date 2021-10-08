import Vue from 'vue';
import App from './App.vue';
import al from './data copy';
import { message1, message2 } from './data';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

al(message1);
al(message2);
