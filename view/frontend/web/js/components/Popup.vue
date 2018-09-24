<template>
    <div class="popup" v-if="$store.getters.showNewsletterPopup">
        <a class="close" @click="toogle()">&times;</a>
        <div class="content">
            <div class="form subscribe" id="newsletter-validate-detail">
                <div class="field newletter-title">
                    <label class="label"
                           for="newsletter"><h2>{{ translate("SIGN UP & GET 10% OFF") }}</h2></label>

                    <label class="text">Subscribe to our newsletters now and stay up-to-date with new collections, the
                        latest lookbooks and exclusive offers.</label>
                    <div class="control">
                        <input v-model="email"
                               name="email" type="email" id="newsletter-popups"
                               v-bind:placeholder="translate('Enter your email address')"
                        />
                    </div>
                </div>
                <div class="actions">
                    <button v-if="isValidEmail" @click="send" class="action subscribe primary" title="Subscribe">
                        <span>{{ translate("Subscribe") }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {translate, newsletter} from '../mixins';

    export default {
        mixins: [newsletter, translate],

        methods: {
            toogle() {
                this.$store.state.showPopup = !this.$store.state.showPopup
            }
        }
    }
</script>