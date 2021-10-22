import { createApp } from "vue";
import App from "./App.vue";
import "./css/App.css";
import router from "./router";
import store from "./store";
import axios from "axios";

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(store);
app.use(router);
app.mount("#app");

