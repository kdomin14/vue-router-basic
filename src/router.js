import {createRouter, createWebHistory} from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import NBA from './views/NBA.vue'
import NHL from './views/NHL.vue'
import NFL from './views/NFL.vue'
import signIn from './views/signIn.vue'
import NotFound from './views/404.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/NBA', component: NBA },
    { path: '/NHL', component: NHL },
    { path: '/NFL', component: NFL },
    { path: '/signIn', component: signIn},
    {path: '/:pathMatch(.*)*', component: NotFound },
  ]

export const router = createRouter({
    history: createWebHistory(), routes,
})