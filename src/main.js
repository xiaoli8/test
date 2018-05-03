import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(Vuetify)
new Vue({
    el: '#app',
    render: h => h(App)
});

var Main = {
    data() {
        return {};
    },

    methods: {

    }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')
