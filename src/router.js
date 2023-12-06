import { createRouter, createWebHistory } from "vue-router";
import mainPage from './layouts/mainPage.vue';
import dashboardPage from './layouts/dashboardPage.vue';
import addPlayer from './layouts/addPlayer.vue'
import editPlayer from './layouts/editPlayer.vue'
import store from "./store"; // Импортируйте хранилище Vuex
import addNews from './layouts/addNews.vue'
import articlePage from './layouts/articlePage.vue'
import galleryPage from './layouts/galleryPage.vue'
import playersList from './layouts/playersList.vue'
import addGallery from './layouts/addGallery.vue'
import usersList from './layouts/usersList.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: mainPage, meta: { requiresAuth: true } },
    { path: '/dashboard', component: dashboardPage, meta: { requiresAuth: true, role: !'User' } },
    { path: '/player/add', component: addPlayer, meta: { requiresAuth: true, role: !'user' } },
    { path: '/player/add', component: addPlayer, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/player/edit/:id', component: editPlayer, meta: { requiresAuth: true, role: !'User' } },
    { path: '/news/add', component: addNews, meta: { requiresAuth: true, role: !'User' } },
    { path: '/news/:id', component: articlePage, meta: { requiresAuth: true} },
    { path: '/gallery', component: galleryPage, meta: { requiresAuth: true} },
    { path: '/dashboard/players', component: playersList, meta: { requiresAuth: true, role: !'User' }  },
    { path: '/dashboard/gallery/add', component: addGallery, meta: { requiresAuth: true, role: !'User' }  },
    { path: '/users/list', component: usersList, meta: { requiresAuth: true, role: 'admin' }  }

  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isAuthenticated;
  const userRole = store.state.userRole;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Маршруты, требующие авторизации
    if (!isAuthenticated) {
      if (to.path !== '/') {
        // Перенаправление на главную страницу, если пользователь не аутентифицирован и не находится на главной странице
        next('/');
      } else {
        // Если пользователь находится на главной странице и не аутентифицирован, пропускаем дальше
        next();
      }
    } else {
      if (to.meta.role && to.meta.role !== userRole) {
        // Перенаправление на главную страницу, если у пользователя нет нужной роли
        next('/');
      } else {
        // Переход допускается
        next();
      }
    }
  } else {
    // Для маршрутов без требований авторизации
    next();
  }
});

export default router;
