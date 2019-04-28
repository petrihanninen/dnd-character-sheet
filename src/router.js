import Vue from "vue";
import Router from "vue-router";

const Stats = import("./views/Stats.vue");
const Actions = import("./views/Actions.vue");
const Reactions = import("./views/Reactions.vue");
const Equipment = import("./views/Equipment.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "stats", component: Stats },
    { path: "/actions", name: "actions", component: Actions },
    { path: "/reactions", name: "reactions", component: Reactions },
    { path: "/equipment", name: "equipment", component: Equipment }
  ]
});
