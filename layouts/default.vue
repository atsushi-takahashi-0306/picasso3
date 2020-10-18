<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      disable-route-watcher
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content class="ml-2">
          <v-btn icon nuxt to="/"><v-icon>mdi-home</v-icon></v-btn>
        </v-list-item-content>
        <v-list-item-content class="pl-14">
          <v-icon elevation="0" dense @click="drawer = !drawer"
            >mdi-window-close</v-icon
          >
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.title.toLowerCase()"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
      elevation="4"
      class="mr-4"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <nuxt-link to="/"
        ><v-toolbar-title class="white--text ml-3 pt-0" style="font-size: 30px"
          >picasso</v-toolbar-title
        ></nuxt-link
      >

      <v-spacer></v-spacer>

      <v-btn icon nuxt to="/login" class="mr-3">
        <v-badge v-model="$store.state.user.email" dot color="red" overlap>
          <v-icon>mdi-account-outline</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon nuxt to="/cart" class="mr-3">
        <v-icon>mdi-cart-outline</v-icon>
        <span>{{
          $store.state.item.cart.reduce((p, x) => p + Number(x.quantity), 0)
        }}</span>
      </v-btn>
    </v-app-bar>

    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container>
        <v-main>
          <nuxt />
        </v-main>
      </v-container>

      <v-footer style="margin-top: 120px">
        <v-col class="text-center pa-0"
          ><span class="footer-txt"
            >&copy; {{ new Date().getFullYear() }}picasso</span
          ></v-col
        >
      </v-footer>
    </v-sheet>
  </v-app>
</template>


<script>
import firebase from "~/plugins/firebase";
export default {
  data: function () {
    return {
      drawer: false,
      items: [{ title: "Bags", icon: "mdi-briefcase-outline" }],
    };
  },
  computed: {
    isLogin: {
      get: function () {
        return this.$store.state.user.email;
      },
      set: function (value) {
        console.log("", value);
      },
      isLogin() {
        return this.$store.state.user.email;
      },
    },
  },
  mounted() {
   firebase.auth().onAuthStateChanged(user => {
      if(user){this.$store.dispatch("user/login", user);}
    });
  },
};
</script>


<style lang="scss" scoped>
#app
  > div
  > nav
  > div.v-navigation-drawer__content
  > div.v-list-item.theme--dark
  > div.v-list-item__content.pl-14
  > button::after {
  width: 0%;
}
</style>
