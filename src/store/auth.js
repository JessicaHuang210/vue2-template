export const state = {
  user: JSON.parse(localStorage.getItem("user"))
};
export const actions = {};

export const mutations = {
  clearUser(state) {
    localStorage.removeItem("user");
    state.user = null;
  },
  setUser(state, payload) {
    localStorage.setItem("user", JSON.stringify(payload));
    state.user = payload;
  }
};
export const getters = {
  isAuthenticated: state => !!state.user || !!localStorage.getItem("user")
};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
};
