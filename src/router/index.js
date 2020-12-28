import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const getComponent = name => import(`@/views/${name}`);
const routes = [
  {
    path: "/",
    name: "login",
    component: () => getComponent("Login")
  },
  {
    path: "/about",
    name: "About",
    component: () => getComponent("About")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
