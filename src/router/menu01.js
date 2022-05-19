export default [
  {
    path: "/menu01/exam01view",
    name: "menu01_exam01view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam01View.vue"),
  },
  {
    path: "/menu01/exam02view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam02View"),
  },
  {
    path: "/menu01/exam03view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam03View"),
  },
  {
    path: "/menu01/exam04view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam04View.vue"),
  },
  {
    path: "/menu01/exam05view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam05View.vue"),
    redirect: "/menu01/exam05view/subacomponent",
    children: [
      {
        path: "/menu01/exam05view/subacomponent",
        component: () => import(/* webpackChunkName: "menu01" */ "../components/menu01/SubAComponent.vue"),
      },
      {
        path: "/menu01/exam05view/subbcomponent",
        component: () => import(/* webpackChunkName: "menu01" */ "../components/menu01/SubBComponent.vue"),
      },
    ],
  },
  {
    path: "/menu01/exam06view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam06View.vue"),
    children: [
      {
        path: "",
        components: {
          default: () => import(/* webpackChunkName: "menu01" */ "../components/menu01/SubAComponent.vue"),
          rv1: () => import(/* webpackChunkName: "menu01" */ "../components/menu01/SubBComponent.vue"),
          rv2: () => import(/* webpackChunkName: "menu01" */ "../components/menu01/SubCComponent.vue"),
        },
      },
    ],
  },
  {
    path: "/menu01/exam07view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam07View.vue"),
  },
  {
    path: "/menu01/exam08view/:kind?/:color?",
    name: "menu01_exam08view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam08View.vue"),
  },
];
