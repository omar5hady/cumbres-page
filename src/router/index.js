import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { 
      path: '/', 
      redirect :'/precios'
  },
  {
    path: "/precios",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PreciosView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
