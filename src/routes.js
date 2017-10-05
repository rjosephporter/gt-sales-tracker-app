import HomeIndex from './Home/Index.vue';
import SalesIndex from './Sales/Index.vue';
import SalesAdd from './Sales/Add.vue';
import SalesEdit from './Sales/Edit.vue';
import ExpensesIndex from './Expenses/Index.vue';
import ExpensesAdd from './Expenses/Add.vue';
import ExpensesEdit from './Expenses/Edit.vue';

export const routes = [
	{ path: '/', component: HomeIndex },
	{ path: '/sales', component: SalesIndex },
	{ path: '/expenses', component: ExpensesIndex },
	{ path: '/sales/add', component: SalesAdd },
	{ path: '/expenses/add', component: ExpensesAdd },
	{ path: '/sales/:id/edit', component: SalesEdit  },
	{ path: '/expenses/:id/edit', component: ExpensesEdit  },
]