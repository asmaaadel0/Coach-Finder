import { createStore } from "vuex";

import coachModule from "./modules/coaches/index";

const store = createStore({
  modules: {
    coaches: coachModule,
  },
});

export default store;
