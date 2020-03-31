require('./bootstrap');

import VueRouter from "vue-router";

import moment from "moment";

import Index from "./index.vue";
import router from "./routes";

import StarRating from "./shared/components/StarRating.vue";

window.Vue = require('vue');

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//Vue.component('example-2', require('./components/Example2.vue').default);

Vue.use(VueRouter);

//filter globally
Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index" : Index
    }
});
