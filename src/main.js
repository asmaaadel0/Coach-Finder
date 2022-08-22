import { createApp } from "vue";

import router from "./router";
import store from "./store/index";
import App from "./App.vue";
import BaseCard from './components/ui/BaseCard.vue';
// import BaseButton from './components/ui/BaseButton.vue';
// import BaseCart from './components/ui/BaseCart.vue';



const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card',BaseCard);
// app.component('base-card',BaseButton);

app.mount("#app");
