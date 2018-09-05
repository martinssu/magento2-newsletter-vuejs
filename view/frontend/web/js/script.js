import Vue from 'vue';
import Newsletter from './components/Newsletter.vue';
import Popup from './components/Popup.vue';
import Overlay from './components/Overlay.vue';
import VueResource from 'vue-resource';
import store from './storage/index';

Vue.use(VueResource);

export var vue = new Vue({
    el: '#app',
    store,
    components: {
        'newsletter': Newsletter,
        'popup': Popup,
        'overlay': Overlay
    },
    data: {
        translate,
    },
    created() {
        this.$store.commit('initialiseStore');
    }
});



