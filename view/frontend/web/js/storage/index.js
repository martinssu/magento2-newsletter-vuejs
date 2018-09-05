import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        showPopup: false,
        newsletterSubscribeActionUrl: '',
        newsletterSubscribed: false
    },
    mutations: {
        initialiseStore(state) {
            if (localStorage.getItem('mage-cache-storage')) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('mage-cache-storage')))
                );
            }
        },
        setUserSubscribed(state) {
            state.newsletterSubscribed = 1;
            state.showPopup = false;
        },
        togglePopup(state) {
            state.showPopup = !state.showPopup
        }
    },
    getters: {
        showNewsletterPopup: state => {
            return (state.customer.firstname && state.customer.subscribed == 0 && state.showPopup == false) ? 1 : 0;
        }
    }
})


export default store