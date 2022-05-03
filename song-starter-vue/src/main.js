import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const GStore = reactive({ flasheMessage: '' })
// Global Storage
// Need to
// inject: ['GStore']
// into components

createApp(App).use(store).use(router).provide('GStore', GStore).mount('#app')
