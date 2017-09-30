<template>
	<v-container>
		<v-layout row>
			<v-flex xs6>
				<v-select
					v-bind:items="mixin.monthsList"
					v-model="month"
					item-value="value"
					item-text="text"
					label="Month"
					single-line
				></v-select>					
			</v-flex>
			<v-flex xs6>
				<v-select
					v-bind:items="mixin.yearsList"
					v-model="year"
					label="Year"
					single-line
				></v-select>					
			</v-flex>	
		</v-layout>
	</v-container>	
</template>

<script>
	export default {
		data: function() {
			return {
				month: parseInt(this.moment().format('M')),
				year: parseInt(this.moment().format('YYYY')),
			};
		}
	}
</script>