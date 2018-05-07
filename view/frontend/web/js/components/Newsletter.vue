<template>
<div class="block newsletter">
    <div class="title"><strong>{{ translate("Newsletter") }}</strong></div>
    <div class="content">
        <div class="form subscribe" id="newsletter-validate-detail">
            <div class="field newsletter">
                <label class="label" for="newsletter"><span>{{ translate("Sign Up for Our Newsletter:") }}</span></label>
                <div class="control">
                    <input v-model="email"
                           name="email" type="email" id="newsletter"
                           v-bind:placeholder="translate('Enter your email address')"
                    />
                </div>
            </div>
            <div class="actions">
                <button v-if="isValidEmail" @click="send" class="action subscribe primary" title="Subscribe"  >
                    <span>{{ translate("Subscribe") }}</span>
                </button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        data: function () {
            return {response: null, email: ''}
        },
        props: ['actionUrl'],
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
                    this.$http.post(this.actionUrl, formData).then(response => {
                        this.response = response;
                        this.email = '';
                    }, response => {
                        this.response = response;
                    });
                }
            },
            translate: function (value) {
                if (!value) return '';
                return this.$parent.$data.translate(value);
            }
        }
    }


</script>