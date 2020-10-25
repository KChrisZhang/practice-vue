import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/Test1")
    },
    {
      path: "/closet",
      name: "closet",
      component: () => import("../views/Closet")
    },
    {
      path: "/form",
      name: "Form",
      component: () => import("../views/Form/parent")
    },
    {
      path: "/charts",
      name: "ChartIndex",
      component: () => import("../views/Charts"),
      redirect: { name: "BarChart" },
      children: [
        {
          path: "line",
          name: "LineChart",
          component: () => import("../views/Charts/LineChart.vue")
        },
        {
          path: "bar",
          name: "BarChart",
          component: () => import("../views/Charts/BarChart.vue")
        },
        {
          path: "pie",
          name: "PieChart",
          component: () => import("../views/Charts/PieChart.vue")
        }
      ]
    }
  ]
});
