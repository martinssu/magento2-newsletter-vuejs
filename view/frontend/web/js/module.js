define([
    './dist/index',
    'Magento_Customer/js/customer-data',
    'mage/translate'
], function (script, customerData, tr) {
    "use strict";
    return function (config) {
        script.vue.$data.translate = tr;
        script.vue.$store.state.newsletterSubscribeActionUrl = config.subscribeActionUrl
        script.vue.$store.watch(
            function (state) {
                return state.newsletterSubscribed;
            },
            function (value, oldValue) {
                if (value == true)   script.vue.$store.commit('togglePopup'); customerData.reload('customer');
            }
        );
    }
});

