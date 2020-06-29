import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './firebaseInit';
import AOS from 'aos';
import VueParallax from "vue-parallax-js";
import 'aos/dist/aos.css';

import { firestorePlugin } from 'vuefire';

Vue.use(firestorePlugin);
Vue.use(VueParallax);

Vue.config.productionTip = false

new Vue({
    created() {
        AOS.init();
    },
    render: h => h(App),
}).$mount('#app')
