import Vue from 'vue';
import Subscribe from './components/Subscribe.vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

export var vue  = new Vue({
    el: '#app',
    components: {
        'my-component': Subscribe
    },
    data: {
        response: null,
        email: '',
        config: {}
    },
    computed: {
        isValidEmail: function(){
            if (this.email)  {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(this.email);
            }
        }
    },
    methods: {
        send: function () {
            if (this.email) {
                var formData = new FormData();
                formData.append('email', this.email);
                this.$http.post(this.config.actionUrl, formData).then(response => {
                    this.response = response;
                    this.email = '';
                }, response => {
                    this.response = response;
                });
            }
        }
    }
});



