import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./style.css";
import App from "./App.vue";

import HomePage from "./pages/HomePage.vue";
import JSPage from "./pages/JSPage.vue";
import GOPage from "./pages/GOPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/why-javascript-is-used", component: JSPage },
    { path: "/why-go-is-used", component: GOPage },
  ],
});

const app = createApp(App);

app.use(router).mount("#app");
