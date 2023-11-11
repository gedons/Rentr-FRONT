
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
      async register({ commit }, userData) {
        try {
          const response = await axiosClient.post("/auth/register", userData);
          const user = response.data; 
          // const authToken = user.token;
          // sessionStorage.setItem("TOKEN", authToken); 
          commit("setUser", user);
          return true;  
        } catch (error) {
          return false;  
        }
      },

      async login({ commit }, credentials) {
        try {
          const response = await axiosClient.post("/auth/login", credentials);
          const { user, authToken } = response.data; 
          sessionStorage.setItem("TOKEN", authToken);
          commit("setUser", user);
          return true;  
        } catch (error) {
          return false;  
        }
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
  