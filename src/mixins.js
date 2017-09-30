import moment from 'moment';

export const mixins = {
	data: function() {
		return {
			mixin: {
		      	monthsList: [
		      		{ value: 1, text: 'January' },
		      		{ value: 2, text: 'February' },
		      		{ value: 3, text: 'March' },
		      		{ value: 4, text: 'April' },
		      		{ value: 5, text: 'May' },
		      		{ value: 6, text: 'June' },
		      		{ value: 7, text: 'July' },
		      		{ value: 8, text: 'August' },
		      		{ value: 9, text: 'September' },
		      		{ value: 10, text: 'October' },
		      		{ value: 11, text: 'November' },
		      		{ value: 12, text: 'December' },
		      	],
		      	yearsList: [ 2016, 2017, 2018 ],				
				startYear: 2016,
				endYear: this.moment().format('YYYY')
			}
		};
	},
	methods: {
		moment: function() {
			return moment();
		}
	}
}