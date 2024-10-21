import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import AppContainer from './components/AppContainer.vue'

const app = createApp(App)
const pinia = createPinia()

app.component(AppContainer)
app.use(pinia)
app.mount('#app')
