import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'MainLayout',
        component: () => import('../views/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'Main',
                component: () => import('../views/Main.vue')
            },
            {
                path: 'photos',
                name: 'PhotoGallery',
                component: () => import('../views/PhotoGallery.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
