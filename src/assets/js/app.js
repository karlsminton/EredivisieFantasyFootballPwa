import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import Standings from './components/Standings.vue'
import Squad from './components/Squad.vue'
import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('./serviceWorker.js')
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
      path: '/standings',
      name: 'standings',
      component: Standings,
      props: true,
    },
    {
      path: '/squad',
      name: 'Choose Squad',
      component: Squad,
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
