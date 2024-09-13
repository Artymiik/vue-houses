// ---------------------------
// Default настройки
// ---------------------------
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

// ------------------------
// Настройка tailwind
// ------------------------
import "./index.css";

// ----------------
// Компоненты VUE
// ----------------
import HomeView from "./views/HomeView.vue";
import ProjectView from "./views/ProjectView.vue";

// ---------------------------
// Настройка Router (url)
// ---------------------------
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomeView,
    },
    {
      name: "Project",
      path: "/project/:title",
      component: ProjectView,
    },
  ],
});

createApp(App).use(router).mount("#app");
