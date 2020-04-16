import VueRouter from "vue-router";

import Basket from "./basket/Basket.vue";
import Bookable from "./bookable/Bookable.vue";
import Bookables from "./bookables/Bookables.vue";
import Review from "./review/Review.vue";

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
    },
    {
        path: "/review/:id",
        component: Review,
        name: "review",
    },
    {
        path: "/basket",
        component: Basket,
        name: "basket",
    },
    {
        path: "/auth/login",
        component: require("./auth/Login.vue").default,
        name: "login",
    },
    {
        path: "/auth/register",
        component: require("./auth/Register.vue").default,
        name: "register",
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
