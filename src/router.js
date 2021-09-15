import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Music from '/src/components/Music.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/music',
        name: 'Music',
        component: Music,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router