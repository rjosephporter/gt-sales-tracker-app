<template>
	<v-layout row wrap>
	  <v-flex>
	  	<v-card>
	  		<v-card-title>Edit Sales</v-card-title>
	  		<v-card-text>
				<form>
				<v-menu
					lazy
					:close-on-content-click="false"
					v-model="dateMenu"
					transition="scale-transition"
					offset-y
					full-width
					:nudge-left="40"
					max-width="290px"
				>
					<v-text-field
						slot="activator"
						label="Date"
						v-model="sales.date"
						:error-messages="errors.collect('Date')"
						v-validate="'required|date_format:YYYY-MM-DD'"
				  		data-vv-name="Date"
						readonly
						>
					</v-text-field>
					<v-date-picker 
						v-model="sales.date" 
						no-title 
						scrollable
						dark 
						actions
					>
						<template scope="{ save, cancel }">
							<v-card-actions>
								<v-btn flat error @click.native="cancel()">Cancel</v-btn>
								<v-btn flat success @click.native="save()">Save</v-btn>
							</v-card-actions>
						</template>
					</v-date-picker>						
				</v-menu>
				<v-select
	              v-bind:items="shifts"
	              item-value="id"
	              item-text="name"
	              v-model="sales.shift_id"
	              label="Shift"
				  :error-messages="errors.collect('Shift')"
				  v-validate="'required|digits:1|between:1,2'"
				  data-vv-name="Shift"            
            	></v-select>
            	<v-text-field
	              label="Amount"
	              v-model="sales.amount"
	              prefix="₱"
				  :error-messages="errors.collect('Amount')"
				  v-validate="'required|decimal:2'"
				  data-vv-name="Amount"		              
	            ></v-text-field>
				<v-text-field
	                v-model="sales.remarks"
	                label="Remarks"
	                textarea
	                rows="2"
	            ></v-text-field>
				<v-checkbox
				  v-model="sales.none"
				  value="1"
				  label="No sales for this date"
				></v-checkbox>	            

				<v-btn error @click="reset">reset</v-btn>
				<v-btn success @click="update">update</v-btn>
				
				</form>
	  		</v-card-text>
	  	</v-card>
	  </v-flex>
	</v-layout>	
</template>

<script>
  export default {
    $validates: true,
    data () {
      return {
      	dateMenu: false,
      	shifts: [
      		{ id: 1, name: 'First Shift' },
      		{ id: 2, name: 'Second Shift' }
      	],
      	sales: {
      		date: this.moment().format('YYYY-MM-DD'),
      		shift_id: 2,
      		amount: 1237.50,
      		remarks: 'Testing remarks content',
      		none: ''
      	}
      }
    },
    methods: {
      update () {
      	let vm = this;
        this.$validator.validateAll().then(function(valid) {
        	if(valid) {
        		console.log('valid');
        		console.log(vm.sales);
        	} else {
        		console.log('invalid');
        	}
        });   
      },
      reset () {
        this.sales.date = this.moment().format('YYYY-MM-DD');
        this.sales.shift_id = 2;
        this.sales.amount = 1237.50;
        this.sales.remarks = 'Testing remarks content';
        this.sales.none = '';
        this.$validator.reset()
      }
    }
  }
</script>

