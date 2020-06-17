import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './pages/front/landingpage.vue';
//backend
//dashboard
import ClientDashboard from './pages/back/client/clientdashboard.vue';
import SuperadminDashboard from './pages/back/superadmin/superadmindashboard.vue';
import AdminDashboard from './pages/back/admin/admindashboard.vue';


let routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/client/dashboard',
        name: 'ClientDashboard',
        component: ClientDashboard,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/admin/dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard,
        meta: {
            requiresAuth: true,
        }

    },
    {
        path: '/superadmin/dashboard',
        name: 'SuperadminDashboard',
        component: SuperadminDashboard,
        meta: {
            requiresAuth: true,
        }

    },
];

export default new VueRouter({
    mode: 'history',
    routes
});
