import Vue from 'vue';
import Subscribe from './components/Subscribe.vue';
import VueResource from 'vue-resource';


var customerData = require('/Users/martinssaukums/Documents/Projects/www/m22-2/vendor/magento/module-customer/view/frontend/web/js/customer-data.js');

Vue.use(VueResource);

console.log(customerData);

new Vue({
    el: '#app',
    components: {
        'my-component': Subscribe
    },
    methods: {
        send: function () {
            this.$http.post(config.actionUrl, {'email' : 'sdfsadf'}).then(response => {
                console.log(response);
            }, response => {
                // error callback
            });
            alert()
        }
    }
});

console.log(config);

