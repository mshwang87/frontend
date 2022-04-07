
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import PaymentManager from "./components/PaymentManager"

import CarManager from "./components/CarManager"

import ReservationManager from "./components/ReservationManager"

import MessageManager from "./components/MessageManager"


import Roomview from "./components/Roomview"
export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/payments',
                name: 'PaymentManager',
                component: PaymentManager
            },

            {
                path: '/cars',
                name: 'CarManager',
                component: CarManager
            },

            {
                path: '/reservations',
                name: 'ReservationManager',
                component: ReservationManager
            },

            {
                path: '/messages',
                name: 'MessageManager',
                component: MessageManager
            },


            {
                path: '/roomviews',
                name: 'Roomview',
                component: Roomview
            },


    ]
})
