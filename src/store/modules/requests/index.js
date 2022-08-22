import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state() {
    return {
      requests: [],
    };
  },
};
