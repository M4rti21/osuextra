import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Info from '@/views/InfoView.vue'
import Compare from '@/views/CompareView.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/info',
            component: Info
        },
        {
            path: '/compare',
            component: Compare
        }
    ],
})
