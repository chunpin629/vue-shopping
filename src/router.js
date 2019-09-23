import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/home/Home.vue';
import Cart from './components/cart/Cart.vue';
import Checkout from './components/checkout/Checkout.vue';
import Completion from './components/checkout/Completion.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{ path: '/', name: 'home', component: Home },
		{ path: '/cart', name: 'cart', component: Cart },
		{ path: '/checkout', name: 'checkout', component: Checkout },
		{ path: '/checkout/completion', name: 'completion', component: Completion },
		{ path: '*', redirect: '/' }
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return { seletor: to.hash };
		}
		return { x: 0, y: 0 };
	}
});
