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
import registerComponent from './layouts/registerComponent.vue'
import editUser from './layouts/editUser.vue'

import teamsPage from './layouts/teamsPage.vue'
import addTeam from './layouts/addNewTeam.vue'
import teamList from './layouts/teamList.vue'
import herrenPage from './layouts/herrenPage.vue'


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
    { path: '/users/list', component: usersList, meta: { requiresAuth: true, role: 'admin' }  },
    { path: '/user/register/:key?', component: registerComponent },
    { path: '/user/edit/:id', component: editUser, meta: { requiresAuth: true, role: !'User' }  },

    { path: '/dashboard/teams', component: teamsPage, meta: { requiresAuth: true, role: !'User' } },
    { path: '/dashboard/teams/add', component: addTeam, meta: { requiresAuth: true, role: !'User' } },
    { path: '/team/:teamName/list', component: teamList, meta: { requiresAuth: true, role: !'User' } },
    { path: '/herren', component: herrenPage }
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isAuthenticated;
  const userRole = store.state.userRole;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      if (to.path !== '/') {
        next('/');
      } else {
        next();
      }
    } else {
      if (to.meta.role && to.meta.role !== userRole) {
        next('/');
      } else {
        next();
      }
    }
  } else if (to.matched.some(record => record.meta.requiresKey)) {
    const key = to.params.key;
    if (!key) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});



export default router;
