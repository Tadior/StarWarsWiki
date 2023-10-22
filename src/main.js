import Vue from "vue";
import App from "./App.vue";
import MyContainer from "@/shared/Container/MyContainer";
import VueRouter from "vue-router";
import { ROUTE_LIST, ADDITIONAL_ROUTES } from "./data/ROUTES";
// import RouterLink from "vue-router";

const myRoutes = ROUTE_LIST.map((route) => {
  return {
    path: route.href,
    component: route.component,
  };
}).concat(
  ADDITIONAL_ROUTES.map((route) => {
    return {
      path: route.href,
      component: route.component,
    };
  })
);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: myRoutes,
  mode: "history",
});

Vue.config.productionTip = false;
Vue.component("MyContainer", MyContainer);
// Vue.component("RouterLink", RouterLink);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
