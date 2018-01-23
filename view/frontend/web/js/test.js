
//
// ;


define([
    'underscore',
    "./dist/index"
], function (_, script) {
    "use strict";
    script.vue.test();

    console.log(script.vue.$data.a);
    script.vue.$watch('a', function (newVal, oldVal) {
        console.log(newVal);
        console.log(oldVal);
    });
    script.vue.test();

    return false;
});