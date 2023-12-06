// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
    userRole: '',
    userData: {}, // Новое состояние для хранения данных пользователя
  },
  mutations: {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setUserRole(state, role) {
      state.userRole = role;
    },
    setUserData(state, userData) {
      state.userData = userData; // Мутация для сохранения данных пользователя
    },
  },
  actions: {
    updateUserAuthState({ commit }, isAuthenticated) {
      commit('setAuthentication', isAuthenticated);
    },
    updateUserRole({ commit }, role) {
      commit('setUserRole', role);
    },
    updateUserData({ commit }, userData) {
      commit('setUserData', userData); // Действие для обновления данных пользователя
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    userRole: (state) => state.userRole,
    userData: (state) => state.userData, // Геттер для получения данных пользователя
  },
});
