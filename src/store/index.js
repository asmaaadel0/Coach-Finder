import { createStore } from "vuex";

import coachModule from "./modules/coaches/index";

const store = createStore({
  modules: {
    coaches: coachModule,
  },
  state() {
    return {
      userId: "c3",
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
