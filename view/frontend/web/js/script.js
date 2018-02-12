import Vue from 'vue';
import Newsletter from './components/Newsletter.vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

export var vue  = new Vue({
    el: '#app',
    components: {
        'newsletter': Newsletter
    },
    data: {
        translate
    }
});



