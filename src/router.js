import { createRouter, createWebHistory } from "vue-router";
import mainPage from './layouts/mainPage.vue';
import dashboardPage from './layouts/dashboardPage.vue';
import addPlayer from './layouts/addPlayer.vue'
import editPlayer from './layouts/editPlayer.vue'
import store from "./store"; // Импортируйте хранилище Vuex
import addNews from './layouts/addNews.vue'
import editNews from './layouts/editNews.vue'
import articlePage from './layouts/articlePage.vue'
import galleryPage from './layouts/galleryPage.vue'
import playersList from './layouts/playersList.vue'
import addGallery from './layouts/addGallery.vue'
import editGalleryItem from './layouts/editGalleryItem.vue'
import usersList from './layouts/usersList.vue'
import trainersList from './layouts/trainersList.vue'
import registerComponent from './layouts/registerComponent.vue'
import editUser from './layouts/editUser.vue'
import editTeam from './layouts/editTeam.vue'

import teamsPage from './layouts/teamsPage.vue'
import addTeam from './layouts/addNewTeam.vue'
import teamList from './layouts/teamList.vue'
import herrenPage from './layouts/herrenPage.vue'
import frauenPage from './layouts/frauenPage.vue'
import juniorenPage from './layouts/juniorenPage.vue'
import documentsLayout from './layouts/documentsLayout.vue'
import newsPage from './layouts/newsPage.vue'
import dashboardNews from './layouts/dashboardNews.vue'
import galleryItem from './layouts/galleryItem.vue'
import sponsoringPage from './layouts/sponsoringPage.vue'
import analyticsPage from './layouts/analyticsPage.vue'
import vereinsfuehrungComponent from './layouts/verein/unser-verein/vereinsfuehrungComponent.vue'
import compAnsprechpartner from './layouts/verein/unser-verein/compAnsprechpartner.vue'
import schiedsrichterComponent from './layouts/verein/unser-verein/schiedsrichterComponent.vue'
import portraetLayout from './layouts/verein/unser-verein/portraetLayout.vue'
import vereinszieleLayout from './layouts/verein/unser-verein/vereinszieleLayout.vue'
import chronikLayout from './layouts/verein/unser-verein/chronikLayout.vue'
import erfolgeLayout from './layouts/verein/unser-verein/erfolgeLayout.vue'
import satzungLayout from './layouts/verein/unser-verein/satzungLayout.vue'
import partnerschaftenLayout from './layouts/verein/vereinsaktivitaeten/partnerschaftenLayout.vue'
import oktoberfestLayout from './layouts/verein/vereinsaktivitaeten/oktoberfestLayout.vue'
import vatertagsturnierLayout from './layouts/verein/vereinsaktivitaeten/vatertagsturnierLayout.vue'
import ortsteilturnierLayout from './layouts/verein/vereinsaktivitaeten/ortsteilturnierLayout.vue'
import weindorfLayout from './layouts/verein/vereinsaktivitaeten/weindorfLayout.vue'
import vereinsheimLayout from './layouts/verein/vereinsgelaende/vereinsheimLayout.vue'
import sportstaettenLayout from './layouts/verein/vereinsgelaende/sportstaettenLayout.vue'
import anfahrtLayout from './layouts/verein/vereinsgelaende/anfahrtLayout.vue'
import neubauKunstrasenLayout from './layouts/verein/vereinsgelaende/neubauKunstrasenLayout.vue'
import mitgliedschaftLayout from './layouts/verein/vereinsgelaende/mitgliedschaftLayout.vue'
import ehrenamtLayout from './layouts/verein/vereinsgelaende/ehrenamtLayout.vue'
import foerdervereinLayout from './layouts/verein/vereinsgelaende/foerdervereinLayout.vue'
import pageList from './layouts/pageList.vue'



// Interaktiv

import rssLayout from './layouts/verein/interaktiv/rssLayout.vue'
import downloadsLayout from './layouts/verein/interaktiv/downloadsLayout.vue'
import presseLayout from './layouts/verein/interaktiv/presseLayout.vue'
import kontaktLayout from './layouts/verein/interaktiv/kontaktLayout.vue'
import sucheLayout from './layouts/verein/interaktiv/sucheLayout.vue'
import impressumLayout from './layouts/verein/interaktiv/impressumLayout.vue'
import datenschutzerklaerungLayout from './layouts/verein/interaktiv/datenschutzerklaerungLayout.vue'

import vereinUniversal from './layouts/vereinLayout.vue'
import addVereinPage from './layouts/addVereinPage.vue'
import editVerein from './layouts/editVerein.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: mainPage, meta: { requiresAuth: true } },
    { path: '/dashboard', component: dashboardPage, meta: { requiresAuth: true, role: !'User' } },
    { path: '/player/add', component: addPlayer, meta: { requiresAuth: true, role: !'user' } },
    { path: '/player/add', component: addPlayer, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/player/edit/:id', component: editPlayer, meta: { requiresAuth: true, role: !'User' } },
    { path: '/news/add', component: addNews, meta: { requiresAuth: true, role: !'User' } },
    { path: '/news/edit/:id', component: editNews, meta: { requiresAuth: true, role: !'User' } },
    { path: '/news/:id', component: articlePage, meta: { requiresAuth: true} },
    { path: '/gallery', component: galleryPage, meta: { requiresAuth: true} },
    { path: '/gallery/edit/:id', component: editGalleryItem, meta: { requiresAuth: true} },
    { path: '/dashboard/players', component: playersList, meta: { requiresAuth: true, role: !'User' }  },
    { path: '/dashboard/documents', component: documentsLayout, meta: { requiresAuth: true, role: !'User' }  },
    { path: '/dashboard/gallery/add', component: addGallery, meta: { requiresAuth: true, role: !'User' }  },
    { path: '/users/list', component: usersList, meta: { requiresAuth: true, role: 'admin' }  },
    { path: '/trainers/list', component: trainersList, meta: { requiresAuth: true, role: 'admin' }  },
    { path: '/user/register/:key?', component: registerComponent },
    { path: '/user/edit/:id', component: editUser, meta: { requiresAuth: true, role: !'User' }  },
    { path: '/editTeam/:id', component: editTeam, meta: { requiresAuth: true, role: !'User' }  },

    { path: '/dashboard/teams', component: teamsPage, meta: { requiresAuth: true, role: !'User' } },
    { path: '/dashboard/teams/add', component: addTeam, meta: { requiresAuth: true, role: !'User' } },
    { path: '/analytics', component: analyticsPage, meta: { requiresAuth: true, role: !'User' } },
    { path: '/team/:teamName/list', component: teamList, meta: { requiresAuth: true, role: !'User' } },
    { path: '/frauen', component: frauenPage },
    { path: '/junioren', component: juniorenPage },
    { path: '/herren', component: herrenPage },
    { path: '/news', component: newsPage },
    { path: '/gallery/:id', component: galleryItem },
    { path: '/sponsoring', component: sponsoringPage },
    { path: '/dashboard/news', component: dashboardNews, meta: { requiresAuth: true, role: !'User'} },
    { path: '/dashboard/page-list', component: pageList, meta: { requiresAuth: true, role: !'User'} },


    // Verein Routers

    { path: '/verein/unser-verein/vereinsfuehrung', component: vereinsfuehrungComponent },
    { path: '/verein/unser-verein/ansprechpartner', component: compAnsprechpartner },
    { path: '/verein/unser-verein/schiedsrichter', component: schiedsrichterComponent },
    { path: '/verein/unser-verein/portraet', component: portraetLayout },
    { path: '/verein/unser-verein/vereinsziele', component: vereinszieleLayout },
    { path: '/verein/unser-verein/chronik', component: chronikLayout },
    { path: '/verein/unser-verein/erfolge', component: erfolgeLayout },
    { path: '/verein/unser-verein/satzung', component: satzungLayout },


    // vereinsaktivitaeten 

    { path: '/verein/vereinsaktivitaeten/partnerschaften', component: partnerschaftenLayout },
    { path: '/verein/vereinsaktivitaeten/oktoberfest', component: oktoberfestLayout },
    { path: '/verein/vereinsaktivitaeten/vatertagsturnier', component: vatertagsturnierLayout },
    { path: '/verein/vereinsaktivitaeten/ortsteilturnier', component: ortsteilturnierLayout },
    { path: '/verein/vereinsaktivitaeten/weindorf', component: weindorfLayout },



    // vereinsheimLayout


    { path:'/verein/vereinsgelaende/vereinsheim', component: vereinsheimLayout },
    { path:'/verein/vereinsgelaende/sportstaetten', component: sportstaettenLayout },
    { path:'/verein/vereinsgelaende/anfahrt', component: anfahrtLayout },
    { path:'/verein/vereinsgelaende/neubau-kunstrasen', component: neubauKunstrasenLayout },


    // mitgliedschaft 

    { path: '/verein/vereinsgelaende/mitgliedschaft', component: mitgliedschaftLayout },
    { path: '/verein/vereinsgelaende/ehrenamt', component: ehrenamtLayout },
    { path: '/verein/vereinsgelaende/foerderverein', component: foerdervereinLayout },
    

    // Interaktiv

    { path: '/verein/interaktiv/rss', component: rssLayout },
    { path: '/verein/interaktiv/downloads', component: downloadsLayout },
    { path: '/verein/interaktiv/presse', component: presseLayout },
    { path: '/verein/interaktiv/kontakt', component: kontaktLayout },
    { path: '/verein/interaktiv/suche', component: sucheLayout },
    { path: '/verein/interaktiv/impressum', component: impressumLayout },
    { path: '/verein/interaktiv/datenschutzerklaerung', component: datenschutzerklaerungLayout },


    // Verein Universal
    { path: '/verein/:name?', component: vereinUniversal },
    { path: '/dashboard/addVereinPage', component: addVereinPage },
    { path: '/dashboard/pages/edit/:id', component: editVerein }
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
