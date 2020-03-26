import VueRouter from "vue-router";

import Bookable from "./bookable/Bookable.vue";
import Bookables from "./bookables/Bookables.vue";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home",
    },
    {
        path: "/bookable/:id",
        component: Bookable,
        name: "bookable",
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
