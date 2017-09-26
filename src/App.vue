<template>
  <v-app id="example-1" toolbar footer dark>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      light
      enable-resize-watcher
      absolute
      dark
    >
      <v-list two-line>
        <v-list-tile @click="" v-for="menuItem in mainMenu">
          <v-list-tile-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ menuItem.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Gamerz Throne - Sales Tracker</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <!--v-router-->
        <app-sales-index></app-sales-index>
      </v-container>
    </main>
    <v-footer dark>
      <span class="white--text">© 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import SalesIndex from './Sales/Index.vue';

  export default {
    data () {
      return {
        drawer: false,
        mainMenu: [
          { icon: 'home', title: 'Home', action: null },
          { icon: 'account_balance_wallet', title: 'Sales', action: null },
          { icon: 'payment', title: 'Expenses', action: null },
        ]
      }
    },
    components: {
      'appSalesIndex': SalesIndex
    }
  }
</script>
