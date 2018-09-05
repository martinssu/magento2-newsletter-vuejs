export const newsletter = {
    data: function () {
        return {
            emailValidPatern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            response: null,
            email: ''
        }
    },
    computed: {
        isValidEmail: function () {
            if (this.email) {
                return this.$data.emailValidPatern.test(this.email);
            }
        }
    },
    methods: {
        send: function () {
            if (this.email) {
                var formData = new FormData();
                formData.append('email', this.email);
                this.$http.post(this.$store.state.newsletterSubscribeActionUrl, formData).then(response => {
                    this.response = response;
                    this.email = '';
                    this.$store.commit('setUserSubscribed')

                }, response => {
                    this.response = response;
                });
            }
        },
    }
}