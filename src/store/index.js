import { createStore } from "vuex";

import coachModule from "./modules/coaches/index";
import requestModule from "./modules/coaches/index";

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestModule,
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
