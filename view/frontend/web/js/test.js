
define([
    'underscore',
    './dist/index',
    'Magento_Customer/js/customer-data'
], function (_, script, customerData) {
    "use strict";
    return function (config) {
        script.vue.$data.config = config.data;

        script.vue.$watch('response', function (newVal, oldVal) {
            customerData.reload('messages');
        });
    }
});