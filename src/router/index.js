import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import menu01 from "./menu01";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  ...menu01,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
