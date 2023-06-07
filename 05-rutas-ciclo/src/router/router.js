import { createRouter, createWebHashHistory } from "vue-router";

// 2. Define some routes Each route should map to a component. We'll talk about nested routes later.
const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    { 
        path: "/home",
        name: 'home',
        component: () => import(/* webpackChunkName: "ListPage" */'../modules/pokemon/pages/ListPage')
    },
    { 
        path: "/about",
        name: 'about',
        component: () => import(/* webpackChunkName: "AboutPage" */'../modules/pokemon/pages/AboutPage'),
    },
    { 
        path: "/pokemon-id/:id",
        name: 'pokemon-id',
        component: () => import(/* webpackChunkName: "PokemonPage" */'../modules/pokemon/pages/PokemonPage'),
        props: ( route ) => {
            //console.log(route);
            //const { id } = route.params
            const id = Number( route.params.id)
            return isNaN( id ) ? { id: 1 } : { id: id }
        }
    },
    { 
        path: "/:pathMatch(.*)*",
        //component: () => import(/* webpackChunkName: "NoPageFound" */'../modules/shared/pages/NoPageFound'),
        redirect: '/home'
    },
];

// 3. Create the router instance and pass the `routes` option. You can pass in additional options here, but let's keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

export default router;
