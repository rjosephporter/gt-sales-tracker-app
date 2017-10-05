<template>
	<v-card>
		<v-card-title>Sales</v-card-title>
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
			      <td class="text-xs-right">{{ props.item.shift_1 }}</td>
			      <td class="text-xs-right">{{ props.item.shift_2 }}</td>
			      <td class="text-xs-left">{{ props.item.remarks }}</td>
			      <td class="text-xs-right">{{ props.item.total }}</td>	
			      <td class="text-xs-center">
			      	<v-btn icon class="blue--text text--lighten-2" :to="'/sales/' + props.item.id + '/edit'">
			      		<v-icon>edit</v-icon>
			      	</v-btn>
					<v-btn icon class="red--text text--lighten-2">
					  <v-icon>delete</v-icon>
					</v-btn>
			      </td>				
				</template>	
				<template slot="footer">
					<td><strong>TOTAL</strong></td>
					<td class="text-xs-right"><strong>{{ total_shift_1 }}</strong></td>
					<td class="text-xs-right"><strong>{{ total_shift_2 }}</strong></td>
					<td></td>
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
		  to="/sales/add"
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
					{ text: 'First Shift', value: 'shift_1' },
					{ text: 'Second Shift', value: 'shift_2' },
					{ text: 'Remarks', value: 'remarks' },
					{ text: 'Total', value: 'total' },
					{ text: '', value: '' }

				],
				items: [
					{ id: 1, date: '2017-09-01', shift_1: '₱ 2,345.24', shift_2: '₱ 1,234.25', remarks: 'Missing 200 pesos', total: '₱ 3,579.49' },
					{ id: 2, date: '2017-09-02', shift_1: '₱ 2,345.24', shift_2: '₱ 1,234.25', remarks: 'Missing 200 pesos', total: '₱ 3,579.49' },
					{ id: 3, date: '2017-09-03', shift_1: '₱ 2,345.24', shift_2: '₱ 1,234.25', remarks: 'Missing 200 pesos', total: '₱ 3,579.49' },
					{ id: 4, date: '2017-09-04', shift_1: '₱ 1,345.24', shift_2: '₱ 1,234.25', remarks: 'Missing 200 pesos', total: '₱ 3,579.49' },
					{ id: 5, date: '2017-09-05', shift_1: '₱ 2,345.24', shift_2: '₱ 1,234.25', remarks: 'Missing 200 pesos', total: '₱ 3,579.49' },
					{ id: 6, date: '2017-09-06', shift_1: '₱ 3,345.24', shift_2: '₱ 1,234.25', remarks: 'Missing 200 pesos', total: '₱ 3,579.49' },
					{ id: 7, date: '2017-09-07', shift_1: '₱ 2,345.24', shift_2: '₱ 1,234.25', remarks: 'Missing 200 pesos', total: '₱ 3,579.49' },
					{ id: 8, date: '2017-09-08', shift_1: '₱ 4,345.24', shift_2: '₱ 1,234.25', remarks: 'Missing 200 pesos', total: '₱ 3,579.49' },
					{ id: 9, date: '2017-09-09', shift_1: '₱ 6,345.24', shift_2: '₱ 1,234.25', remarks: 'Missing 200 pesos', total: '₱ 3,579.49' },
					{ id: 10, date: '2017-09-10', shift_1: '₱ 5,345.24', shift_2: '₱ 1,234.25', remarks: 'Missing 200 pesos', total: '₱ 3,579.49' },
				],
				total_shift_1: '₱ 45,234.50',
				total_shift_2: '₱ 36,234.50',
				total: '₱ 98,234.50'
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