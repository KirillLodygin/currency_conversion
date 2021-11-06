import {createRouter, createWebHistory} from "vue-router";
import Converter from "@/pages/Converter";
import CurrencyConversion from "@/pages/CurrencyConversion"

const routes = [
    {
        path: '/',
        component: CurrencyConversion
    },
    {
        path: '/converter',
        component: Converter
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
