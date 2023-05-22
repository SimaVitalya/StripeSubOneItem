import {createRouter, createWebHistory} from 'vue-router'
import Example from "../components/Example.vue";
import Component from "../components/Component.vue";
import ProductsComp from "../components/ProductsComp.vue";
import VueComponent from "../components/VueComponent.vue";
import PaymantMain from "../components/Stripe/PaymantMain.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/',
            name: 'PaymantMain',
            component: PaymantMain
        },
        {
            path: '/',
            name: 'Example',
            component: Example
        },
        {
            path: '/component',
            name: 'Word',
            component: Component
        },
        {
            path: '/test',
            name: 'test',
            component: ProductsComp
        },
        {
            path: '/vue',
            name: 'vue',
            component: VueComponent
        },

    ]
})

export default router
