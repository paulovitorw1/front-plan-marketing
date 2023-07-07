import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ListProduct from '../views/ListProduct/ListProduct.vue'
import OverviewProduct from '../views/OverviewProduct/OverviewProduct.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ListProduct',
    component: ListProduct
  },
  {
    path: '/produto/:id',
    name: 'OverviewProduct',
    component: OverviewProduct,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
