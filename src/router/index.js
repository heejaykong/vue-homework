import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import menu01 from "./menu01";
import menu02 from "./menu02";
import menu03 from "./menu03";
import menu04 from "./menu04";

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
  ...menu02,
  ...menu03,
  ...menu04,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
