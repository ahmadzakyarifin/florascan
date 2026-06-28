import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'

// PWA Registration
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })

// Cek dan aplikasikan Dark Mode awal
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark')
} else {
  document.body.classList.remove('dark')
}

createApp(App).use(i18n).mount('#app')
