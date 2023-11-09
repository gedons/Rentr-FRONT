
import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
    state: {
      user: {
        data: {},
        token: sessionStorage.getItem("TOKEN"),
      },
    },
    actions: {
      login({ commit }, user) {
        // Send a request to your Node.js backend to authenticate the user
        // On successful authentication, save the token in session storage and update the store
        sessionStorage.setItem("TOKEN", user.token);
        commit("setUser", user);
      },
      logout({ commit }) {
        // Clear the token from session storage and update the store
        sessionStorage.removeItem("TOKEN");
        commit("clearUser");
      },
    },
    mutations: {
      setUser(state, user) {
        state.user.token = user.token;
        state.user.data = user.data;
      },
      clearUser(state) {
        state.user.token = null;
        state.user.data = {};
      },
    },
    // ... other store configuration
  });

  export default store
  