import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css"
import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css"
import "url/url.js";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/router";

createApp(App).use(router).mount("#app");
