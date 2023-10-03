import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import validate from '@/components/plugins/vee-validate.js'

const app = createApp(App).use(validate)

app.use(router);

app.mount("#app");
