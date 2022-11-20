import {createReactRouter, createRouteConfig} from '@tanstack/react-router';

import {Game, Games, Home} from 'pages';

export const routeConfig = createRouteConfig().createChildren((createRoute) => [
	createRoute({path: '/', component: Home}),
	createRoute({path: '/games'}).createChildren((createRoute) => [
		createRoute({path: '/', component: Games}),
		createRoute({path: ':slug', component: Game}),
	]),
]);

const router = createReactRouter({routeConfig});

export default router;
