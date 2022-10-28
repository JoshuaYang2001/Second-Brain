import { createRouter, createWebHashHistory } from "vue-router";
import login from "@/views/login";
const routes = [
  {
    path: '/', redirect: '/login'
  },
  {
    path: '/login',
    component: login
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
