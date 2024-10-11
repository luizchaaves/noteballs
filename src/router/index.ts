import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Notes from '@/views/notes.vue'
import Stats from '@/views/stats.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'notes',
        component: Notes,
    },
    {
        path: '/stats',
        name: 'stats',
        component: Stats,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
