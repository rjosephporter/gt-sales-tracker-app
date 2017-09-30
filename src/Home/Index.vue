<template>
	<v-layout row wrap>
		<v-flex>
			<v-card>
				<app-month-year-picker></app-month-year-picker>			
				<v-list two-line>
					<v-list-tile avatar v-for="item in items" v-bind:key="item.title" :to="item.route">
						<v-list-tile-avatar>
							<v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>{{ item.title }}</v-list-tile-title>
							<v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
						</v-list-tile-content>
						<v-list-tile-action v-if="item.route">
							<v-btn icon ripple>
								<v-icon class="grey--text text--lighten-1">keyboard_arrow_right</v-icon>
							</v-btn>
						</v-list-tile-action>
					</v-list-tile>	
				</v-list>			
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
	import MonthYearPicker from '../shared/MonthYearPicker.vue';

	export default {
		data () {
			return {
				items: [
					{ icon: 'trending_up', iconClass: 'green lighten-1 white--text', title: 'Sales', subtitle: '₱ 12,345.67', route: '/sales' },
					{ icon: 'trending_down', iconClass: 'red lighten-1 white--text', title: 'Expenses', subtitle: '₱ 4,321.25', route: '/expenses' },
					{ icon: 'account_balance', iconClass: 'blue lighten-1 white--text', title: 'Income', subtitle: '₱ 8,321.25', route: false }
				]
			}
		},
		components: {
			appMonthYearPicker: MonthYearPicker
		},
		mounted: function() {

		}
	}
</script>