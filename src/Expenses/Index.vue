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
			      <td class="text-xs-right">{{ props.item.description }}</td>
			      <td class="text-xs-left">{{ props.item.remarks }}</td>
			      <td class="text-xs-right">{{ props.item.amount }}</td>
			      <td class="text-xs-center">
			      	<v-btn icon class="blue--text text--lighten-2" :to="'/expenses/' + props.item.id + '/edit'">
			      		<v-icon>edit</v-icon>
			      	</v-btn>
					<v-btn icon class="red--text text--lighten-2">
					  <v-icon>delete</v-icon>
					</v-btn>
			      </td>				
				</template>
				<template slot="footer">
					<td><strong>TOTAL</strong></td>
					<td colspan="2">&nbsp;</td>					
					<td class="text-xs-right"><strong>{{ total }}</strong></td>
					<td></td>
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
					{ text: 'Description', value: 'description' },
					{ text: 'Remarks', value: 'remarks' },
					{ text: 'Amount', value: 'amount' },
					{ text: '', value: '' }

				],
				items: [
					{ id: 1, date: '2017-09-01', description: 'Electricity', remarks: '', amount: '₱ 3,579.49' },
					{ id: 2, date: '2017-09-02', description: 'Internet', remarks: '', amount: '₱ 3,579.49' },
					{ id: 3, date: '2017-09-03', description: 'Other', remarks: '', amount: '₱ 3,579.49' },
					{ id: 4, date: '2017-09-04', description: 'Payroll', remarks: '', amount: '₱ 3,579.49' },
					{ id: 5, date: '2017-09-05', description: 'Rent', remarks: '', amount: '₱ 3,579.49' },
					{ id: 6, date: '2017-09-06', description: 'Other', remarks: '', amount: '₱ 3,579.49' },
					{ id: 7, date: '2017-09-07', description: 'Other', remarks: '', amount: '₱ 3,579.49' },
					{ id: 8, date: '2017-09-08', description: 'Payroll', remarks: '', amount: '₱ 3,579.49' },
					{ id: 9, date: '2017-09-09', description: 'Cleaning', remarks: '', amount: '₱ 3,579.49' },
					{ id: 10, date: '2017-09-10', description: 'Other', remarks: '', amount: '₱ 3,579.49' },
				],
				total: '₱ 48,234.50'
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