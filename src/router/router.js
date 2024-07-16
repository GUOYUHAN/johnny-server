// 引入创建路由模式 history模式
import HomePage from '../components/HomePage.vue'
import Music from '../components/Music.vue'
import Playground from '../components/Playground.vue'

// 引入路由各页面配置
const routes = [
  {
    path: '/music',
    name: 'music',
    component: Music
  },
  {
    path: '/playground',
    name: 'playground',
    component: Playground
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage,
    name: 'home',
    meta: {
      keepalive: false
    }
    // children: [
    //   {
    //     path: '/home',
    //     component: HomePage,
    //     name: 'home',
    //     meta: {
    //       keepalive: false
    //     }
    //   }
    // ]
  }
]

export default routes
