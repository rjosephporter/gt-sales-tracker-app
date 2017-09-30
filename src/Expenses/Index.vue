<template>
	<v-card>
		<v-card-title>Expenses</v-card-title>
		<app-month-year-picker></app-month-year-picker>

		<v-card-text>
			<v-data-table
				:headers="headers"
				:items="items"
				hide-actions
				class="elevation-1"
			>
				<template slot="items" scope="props">
			      <td>{{ props.item.date }}</td>
			      <td class="text-xs-right">{{ props.item.name }}</td>
			      <td class="text-xs-left">{{ props.item.remarks }}</td>
			      <td class="text-xs-right">{{ props.item.amount }}</td>
			      <td class="text-xs-center">
			      	<v-btn icon class="blue--text text--lighten-2">
			      		<v-icon>edit</v-icon>
			      	</v-btn>
					<v-btn icon class="red--text text--lighten-2">
					  <v-icon>delete</v-icon>
					</v-btn>
			      </td>				
				</template>	
			</v-data-table>
		</v-card-text>

	  <v-card-text style="height: 100px; position: relative">
		<v-btn
		  fixed
		  dark
		  fab
		  right
		  bottom
		  class="blue"
		  to="/expenses/add"
		>
		  <v-icon>add</v-icon>
		</v-btn>
	  </v-card-text>
	</v-card>
</template>

<script>
	import MonthYearPicker from '../shared/MonthYearPicker.vue';

	export default {
		data: function() {
			return {
				headers: [
					{
						text: 'Date',
						align: 'left',
						value: 'date'
					},
					{ text: 'Name', value: 'name' },
					{ text: 'Remarks', value: 'remarks' },
					{ text: 'Amount', value: 'amount' },
					{ text: '', value: '' }

				],
				items: [
					{ id: 1, date: '2017-09-01', name: 'Electricity', remarks: '', amount: '₱ 3,579.49' },
					{ id: 2, date: '2017-09-02', name: 'Internet', remarks: '', amount: '₱ 3,579.49' },
					{ id: 3, date: '2017-09-03', name: 'Other', remarks: '', amount: '₱ 3,579.49' },
					{ id: 4, date: '2017-09-04', name: 'Payroll', remarks: '', amount: '₱ 3,579.49' },
					{ id: 5, date: '2017-09-05', name: 'Rent', remarks: '', amount: '₱ 3,579.49' },
					{ id: 6, date: '2017-09-06', name: 'Other', remarks: '', amount: '₱ 3,579.49' },
					{ id: 7, date: '2017-09-07', name: 'Other', remarks: '', amount: '₱ 3,579.49' },
					{ id: 8, date: '2017-09-08', name: 'Payroll', remarks: '', amount: '₱ 3,579.49' },
					{ id: 9, date: '2017-09-09', name: 'Cleaning', remarks: '', amount: '₱ 3,579.49' },
					{ id: 10, date: '2017-09-10', name: 'Other', remarks: '', amount: '₱ 3,579.49' },
				]
			};
		},
		components: {
			appMonthYearPicker: MonthYearPicker
		}
	}
</script>

<style>
	.datatable.table tbody td,
	.datatable.table tfoot td {
		white-space: nowrap;
	}
	.datatable.table tfoot td {
		padding: 0 24px;		
	}
</style>