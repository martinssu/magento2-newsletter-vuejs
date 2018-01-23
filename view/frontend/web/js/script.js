import Vue from 'vue';
import Subscribe from './components/Subscribe.vue';
import VueResource from 'vue-resource';

export var vue  = new Vue({
    el: '#app',
    components: {
        'my-component': Subscribe
    },
    data: {
        a: 1,
    },
    methods: {
        test: function () {
          this.a = this.a + 1;
        },

        send: function () {
            // this.$http.post(config.actionUrl, {'email' : 'sdfsadf'}).then(response => {
            //     console.log(response);
            // }, response => {
            //     // error callback
            // });
            // alert()
        }
    }
});



