<template>
	<v-layout row wrap>
	  <v-flex>
	  	<v-card>
	  		<v-card-title>Add Sales</v-card-title>
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
				  		required
						readonly
						>
					</v-text-field>
					<v-date-picker 
						v-model="sales.date" 
						no-title 
						scrollable 
						actions
					>
						<template scope="{ save, cancel }">
							<v-card-actions>
								<v-btn flat primary @click.native="cancel()">Cancel</v-btn>
								<v-btn flat primary @click.native="save()">Save</v-btn>
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
				  required            
            	></v-select>
            	<v-text-field
	              label="Amount"
	              v-model="sales.amount"
	              prefix="₱"
				  :error-messages="errors.collect('Amount')"
				  v-validate="'required|decimal:2'"
				  data-vv-name="Amount"
				  required		              
	            ></v-text-field>
				<v-text-field
	                v-model="sales.remarks"
	                label="Remarks"
	                textarea
	            ></v-text-field>
				<v-checkbox
				  v-model="sales.none"
				  value="1"
				  label="No sales for this date"
				></v-checkbox>	            

				<v-btn @click="submit">submit</v-btn>
				<v-btn @click="clear">clear</v-btn>
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
      		shift_id: '',
      		amount: '',
      		remarks: '',
      		none: ''
      	}
      }
    },
    methods: {
      submit () {
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
      clear () {
        this.sales.date = '';
        this.sales.shift_id = '';
        this.sales.amount = '';
        this.sales.remarks = '';
        this.sales.none = '';
        this.$validator.reset()
      }
    }
  }
</script>

