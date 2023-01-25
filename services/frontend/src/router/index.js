// import { createRouter, createWebHistory } from 'vue-router'
import routes from "./routes";
// import HomeView from '../views/HomeView.vue'
// import RegisterView from '../views/RegisterView.vue'
// import LoginView from '../views/LoginView.vue'
// import DashboardView from '../views/DashboardView.vue'
// import ProfileView from '../views/ProfileView.vue';
// import NoteView from '../views/NoteView.vue';
// import EditNoteView from '../views/EditNoteView.vue';
// import store from '@/store';



// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: HomeView
//   },
//   {
//     path: '/register',
//     name: 'Register',
//     component: RegisterView,
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: LoginView,
//   },
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     component: DashboardView,
//     meta: { requiresAuth: true },
//   },
//   {
//     path: '/profile',
//     name: 'Profile',
//     component: ProfileView,
//     meta: { requiresAuth: true },
//   },
//   {
//     path: '/note/:id',
//     name: 'Note',
//     component: NoteView,
//     meta: { requiresAuth: true },
//     props: true,
//   },
//   {
//     path: '/editnote/:id',
//     name: 'EditNote',
//     component: EditNoteView,
//     meta: { requiresAuth: true },
//     props: true,
//   },
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// router.beforeEach((to, _, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isAuthenticated) {
//       next();
//       return;
//     }
//     next('/login');
//   } else {
//     next();
//   }
// });

// export default router


import VueRouter from "vue-router";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
