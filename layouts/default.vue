<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        dark
        disable-route-watcher
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">Menu</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content class="ml-2">
            <nuxt-link to="/"><v-icon>mdi-home</v-icon></nuxt-link>
          </v-list-item-content>
          <v-list-item-content class="pl-14">
            <v-icon @click="drawer = !drawer" class="pl-6">mdi-window-close</v-icon>
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
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <nuxt-link to="/"
          ><v-toolbar-title class="white--text"
            >picasso</v-toolbar-title
          ></nuxt-link
        >

        <v-spacer></v-spacer>

        <v-btn icon nuxt to="/login">
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
        <v-btn icon nuxt to="/cart">
          <v-icon>mdi-cart-outline</v-icon>
          <span>{{ $store.state.cart.cart.length }}</span>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px">
          <v-main>
            <nuxt />
          </v-main>
        </v-container>
      </v-sheet>
    </v-card>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} picasso</span>
    </v-footer>
  </v-app>
</template>



<script>
import Vue from "vue";

export default{
  data: function () {
    return {
      drawer: false,
      items: [
        { title: "Bags", icon: "mdi-purse-outline" },
        { title: "T-shirts", icon: "mdi-tshirt-crew-outline" },
      ],
      right: null,
    };
  },
};
</script>

 <style>
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
a {
  text-decoration: none;
  color: white;
}
</style>
