import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Notes from '@/views/notes.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'notes',
        component: Notes,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
