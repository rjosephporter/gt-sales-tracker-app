<template>
	<v-layout row wrap>
	  <v-flex>
	  	<v-card>
	  		<v-card-title>Add Expense</v-card-title>
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
						v-model="expense.date"
						:error-messages="errors.collect('Date')"
						v-validate="'required|date_format:YYYY-MM-DD'"
				  		data-vv-name="Date"
						readonly
						>
					</v-text-field>
					<v-date-picker 
						v-model="expense.date" 
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
				<v-text-field
					label="Name"
					v-model="expense.name"
					:error-messages="errors.collect('Name')"
					v-validate="'required'"
					data-vv-name="Name"
					></v-text-field>
            	<v-text-field
	              label="Amount"
	              v-model="expense.amount"
	              prefix="₱"
				  :error-messages="errors.collect('Amount')"
				  v-validate="'required|decimal:2'"
				  data-vv-name="Amount"		              
	            ></v-text-field>
				<v-text-field
	                v-model="expense.remarks"
	                label="Remarks"
	                textarea
	                rows="2"
	            ></v-text-field>	            

				<v-btn error @click="clear">clear</v-btn>
				<v-btn success @click="submit">submit</v-btn>
				
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
      	expense: {
      		date: this.moment().format('YYYY-MM-DD'),
      		name: '',
      		amount: '',
      		remarks: ''
      	}
      }
    },
    methods: {
      submit () {
      	let vm = this;
        this.$validator.validateAll().then(function(valid) {
        	if(valid) {
        		console.log('valid');
        		console.log(vm.expense);
        	} else {
        		console.log('invalid');
        	}
        });   
      },
      clear () {
        this.expense.date = '';
        this.expense.name = '';
        this.expense.amount = '';
        this.expense.remarks = '';
        this.$validator.reset();
      }
    }
  }
</script>

