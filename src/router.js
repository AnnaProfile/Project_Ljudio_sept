import { createRouter, createWebHistory } from 'vue-router'

import Music from '/src/components/Music.vue'
import MusicCard from '/src/components/MusicCard.vue'
import Player from '/src/components/Player.vue'
import ArtistDetail from '/src/components/ArtistDetail.vue'
import ShareComponent from '/src/components/ShareComponent.vue'
import EmailComponent from '/src/components/EmailComponent.vue'

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
      {
        path: "/share",
        name: "Share",
        component: ShareComponent,
      },
      {
        path: "/Email/:id",
        name: "Email",
        component: EmailComponent,
      },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router