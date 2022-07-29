export const getters = {
    isAuthenticated(state) {
      return state.$auth.loggedIn; // auth object as default will be added in vuex state, when you initialize nuxt auth
    },
  //   getUserInfo(state) {
  //     return state.$auth.user;
  //   },
  //   async logoutUser({commit}){
  //     commit('setToken',''),
  //     localStorage.removeItem('token')
  //     this.$route.push("@pages/login")
  //   },
  //   setUser(state, { user }){
  //     state.user = user
  //     state.isLoggedIn = true
  //     localStorage.setItem('user', JSON.stringify(user));
  //     localStorage.setItem('isLoggedIn', state.isLoggedIn);
  // },
  };

