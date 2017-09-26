<template>
	<v-layout row wrap>
	  <v-flex xs12 sm12 md12>
	    <v-card>
	      <v-card-text style="height: 300px;" class="">Hello World!</v-card-text>
	      <v-card-text style="height: 100px; position: relative">
			<v-speed-dial
			  absolute="true"
			  bottom="true"
			  right="true"
			  direction="top"
			  transition="slide-y-reverse-transition"
			>
			  <v-btn
			    slot="activator"
			    class="blue darken-2"
			    dark
			    fab
			    hover
			    v-model="fab"
			  >
			    <v-icon>reorder</v-icon>
			    <v-icon>close</v-icon>
			  </v-btn>
			  <v-btn
			    fab
			    dark
			    small
			    class="indigo"
			  >
			    <v-icon>add</v-icon>
			  </v-btn>			  
			  <v-btn
			    fab
			    dark
			    small
			    class="green"
			  >
			    <v-icon>edit</v-icon>
			  </v-btn>
			  <v-btn
			    fab
			    dark
			    small
			    class="red"
			  >
			    <v-icon>delete</v-icon>
			  </v-btn>
			</v-speed-dial>

	      </v-card-text>
	    </v-card>

	  </v-flex>	  
	</v-layout>
</template>


<script>

</script>
