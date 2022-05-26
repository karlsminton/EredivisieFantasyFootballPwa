import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Post from './components/Post.vue'
import Index from './components/Index.vue'
Vue.use(Router)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(res => console.log('service worker registered.'))
      .catch(error => console.log('service worker failed to register.', error))
  })
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/test',
      name: 'test',
      component: Post,
      props: true,
    },
  ]
})

new Vue({
  el: 'main',
  render: h => h(App),
  router
})
