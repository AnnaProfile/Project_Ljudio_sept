import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Music from '/src/components/Music.vue'
import Player from '/src/components/Player.vue'

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
    {
        path: '/player',
        name: 'Player',
        component: Player,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router