import { createRouter, createWebHistory } from 'vue-router'

import Music from '/src/components/Music.vue'
import Player from '/src/components/Player.vue'
import ArtistDetail from '/src/components/ArtistDetail.vue'
import ShareComponent from '/src/components/ShareComponent.vue'

const routes = [
    {
        path: '/',
        name: 'Music',
        component: Music,
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
      {
        path: "/share",
        name: "Share",
        component: ShareComponent,
      },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router