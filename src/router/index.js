import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import teacher from '@/components/teacher'
import className from '@/components/className'
import blog from '@/components/blog'
import dateClass from '@/components/dateClass'
import rentPlace from '@/components/rentPlace'
import store from '@/components/store'

// import topHeader from './src/components/topHeader'

Vue.use(VueRouter)

// 定義
const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/teacher', name: 'teacher', component: teacher},
  {path: '/className', name: 'className', component: className},
  {path: '/blog', name: 'blog', component: blog},
  {path: '/dateClass', name: 'dateClass', component: dateClass},
  {path: '/rentPlace', name: 'rentPlace', component: rentPlace},
  {path: '/store', name: 'store', component: store},

]

// 創建
const router = new VueRouter({
  mode: 'history',
  routes
})

// 輸出
export default router
