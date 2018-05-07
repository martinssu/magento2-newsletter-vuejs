define([
    './dist/index',
    'Magento_Customer/js/customer-data',
    'mage/translate'
], function (script, customerData,tr) {
    "use strict";
    return function (config) {
        script.vue.$data.translate = tr;
        script.vue.$refs.newsletter.$watch('response', function (newVal, oldVal) {
            customerData.reload('messages');
        });
    }
});

