// 引入创建路由模式 history模式
import HomePage from '../components/HomePage.vue'
import Music from '../components/Music.vue'
// 引入路由各页面配置
const routes = [
  {
    path: '/music',
    name: 'music',
    component: Music
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: HomePage,
    name: 'homepage',
    children: [
      {
        path: '/home',
        component: HomePage,
        name: 'home',
        meta: {
          keepalive: false
        }
      }
      // {
      //   path: '/customizer',
      //   component: Customizer,
      //   name: 'customizer'
      // }
    ]
  }
]

export default routes
