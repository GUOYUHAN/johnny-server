// 引入创建路由模式 history模式
import HomePage from '../components/HomePage.vue'
import Customizer from '../components/Customizer.vue'
// 引入路由各页面配置
const routes = [
  {
    path: '/customizer',
    name: 'customizer',
    component: Customizer
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
        name: 'home'
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
