import Vue from 'vue'
import store from './vuex/store'


const app=Vue.extend(require("./app.vue"))

new app({
    el: '#app',
    store,
})
