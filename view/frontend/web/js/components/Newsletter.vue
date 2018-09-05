<template>
    <div class="block newsletter">
        <div class="title"><strong>{{ translate("Newsletter") }}</strong></div>
        <div class="content">
            <div class="form subscribe" id="newsletter-validate-detail">
                <div class="field newsletter">
                    <label class="label"
                           for="newsletter"><span>{{ translate("Sign Up for Our Newsletter:") }}</span></label>
                    <div class="control">
                        <input v-model="email"
                               name="email" type="email" id="newsletter"
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
    }
</script>