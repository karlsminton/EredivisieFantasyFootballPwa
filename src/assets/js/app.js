import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import Post from './components/Post.vue'
import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

// const app = createApp(App).use(router).mount('main')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(res => console.log('service worker registered.'))
      .catch(error => console.log('service worker failed to register.', error))
  })
}


const routes = [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/post',
      name: 'post',
      component: Post,
      props: true,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
