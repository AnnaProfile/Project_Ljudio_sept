import { createRouter, createWebHistory } from 'vue-router'

import Music from '/src/components/Music.vue'
import MusicCard from '/src/components/MusicCard.vue'
import Player from '/src/components/Player.vue'
import ArtistDetail from '/src/components/ArtistDetail.vue'



const routes = [
    {
        path: '/:id?',
        name: 'Music',
        component: Music, MusicCard
    },
    {
        path: '/player',
        name: 'Player',
        component: Player,
    },
    {
        path: "/music/:id",
        name: "Artist Detail",
        component: ArtistDetail,
      },
     
     
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router