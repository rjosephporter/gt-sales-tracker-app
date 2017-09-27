<template>
  <v-app toolbar footer dark>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      light
      enable-resize-watcher
      absolute
      dark
    >
      <v-list two-line>
        <v-list-tile v-for="(menuItem, ndx) in mainMenu" :key="ndx" :to="menuItem.route">
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
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </main>
    <v-footer dark>
      <span class="white--text">© 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        mainMenu: [
          { icon: 'home', title: 'Home', route: '/sales' },
          { icon: 'account_balance_wallet', title: 'Sales', route: '/sales' },
          { icon: 'payment', title: 'Expenses', route: '/sales/add' },
        ]
      }
    },
    components: {

    },
    methods: {
      changeComponent: function(value) {
        this.activeComponent = value;
      }
    }
  }
</script>
