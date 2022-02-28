import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import Render from './helpers/render'

const app = createApp(App)
routes.push(
  {
    path: '/sponsor',
    redirect: () => ({
      name: 'detail',
      params: {
        id: 37,
      },
    }),
  },
)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  Render.loading_end()
  next()
})
app.use(router)
app.mount('#app')
