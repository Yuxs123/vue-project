import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { setregisterGlobal } from './global'



const app = createApp(App)
app.use(setregisterGlobal)


app.use(createPinia())
app.use(router)

app.mount('#app')
