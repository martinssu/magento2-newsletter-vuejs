export const translate = {
    methods: {
        translate: function (value) {
            if (value && typeof this.$root.$data.translate === "function") {
                return (this.$parent.$root.translate(value))
            } else {
                return "";
            }
        }
    }
}