require("./bootstrap");

import VueRouter from "vue-router";

import Vuex from "vuex";

import moment from "moment";

import Index from "./index.vue";
import router from "./routes";
import storeDefinition from "./store";

import FatalError from "./shared/components/FatalError.vue";
import StarRating from "./shared/components/StarRating.vue";
import Success from "./shared/components/Success.vue";
import ValidationErrors from "./shared/components/ValidationErrors.vue";

window.Vue = require("vue");

Vue.use(VueRouter);
Vue.use(Vuex);

//filter globally
Vue.filter("fromNow", (value) => moment(value).fromNow());

Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("success", Success);
Vue.component("v-errors", ValidationErrors);

const store = new Vuex.Store(storeDefinition);

const app = new Vue({
    el: "#app",
    router,
    store,
    components: {
        index: Index,
    },
    async beforeCreate() {
        this.$store.dispatch("loadStoredState");

        // await axios.get('/sanctum/csrf-cookie');
        // await axios.post("/login", {
        //     email: 'mreichert@example.com',
        //     password: 'password'
        // });

        // await axios.get('/user');
    },
});
