<template>
    <div class="overlay" v-if="showPopup"></div>
</template>

<script>
    export default {
        computed: {
            showPopup: function () {
                return this.$store.getters.showNewsletterPopup
            }
        }
    }
</script>