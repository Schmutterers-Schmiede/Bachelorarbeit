import { createApp } from 'vue'
import App from './App.vue'
import { defineCustomElements } from 'ba-democomponents/loader'

createApp(App).mount('#app')
defineCustomElements();
