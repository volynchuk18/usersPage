import api from '../api';

export default {
  state: {
    allUsers: null,
    users: null,
    perPage: 5,
    totalPages: null,
  },
  mutations: {
    setUsers: (state, data) => { state.users = data; },
    setAllUsers: (state, data) => { state.allUsers = data; },
    setPerPage: (state, data) => { state.perPage = data; },
    setTotalPages: (state, data) => { state.totalPages = data; },
  },
  actions: {
    async getUsers({ commit, state }, page = state.page) {
      const users = await api.getUsers(page, state.perPage);
      commit('setUsers', users.data.data);
      commit('setTotalPages', users.data.total_pages);
    },
    async getAllUsers({ commit }) {
      const users = await api.getUsers(1, Number.MAX_SAFE_INTEGER);
      commit('setAllUsers', users.data.data);
    },
  },
  getters: {
    users: (state) => state.users,
    perPage: (state) => state.perPage,
    totalPages: (state) => state.totalPages,
    allUsers: (state) => state.allUsers,
  },
};
