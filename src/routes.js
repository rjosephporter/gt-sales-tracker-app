import SalesIndex from './Sales/Index.vue';
import SalesAdd from './Sales/Add.vue';

export const routes = [
	{ path: '/', component: SalesIndex },
	{ path: '/sales', component: SalesIndex },
	{ path: '/sales/add', component: SalesAdd }
]