<template>
  <div>
    <ul v-if="$store.state.cart.cart.length">
      <li v-for="(item, index) in $store.state.cart.cart" :key="item.id">
        <div>
          <img :src="item.url" width="150px" height="150px" />
          <div>
            <p>{{ item.name}}</p>
            <v-btn @click="removeCart(index)"> 削除する </v-btn>
            <span>¥{{ item.price }}</span>
          </div>
        </div>
      </li>
      <div class="buy-info">
        <p>小計({{ $store.state.cart.cart.length }}点): </p>
        <p>¥{{Number(totalPrice) | addComma}}</p>
        <v-btn @click.stop="dialog = true"> 購入する </v-btn>
      </div>

      <v-app class="dialog">
        <v-dialog v-model="dialog" max-width="350">
          <v-card>
            <v-card-title class="headline"
              >カートの商品を購入しても<br />よろしいですか？</v-card-title
            >
            <v-card-actions>
              <v-btn @click="dialog = false"> キャンセル </v-btn>
              <v-btn> 購入する </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-app>
    </ul>

    <p v-else>
      お客様のカートに商品がありません。<br /><nuxt-link to="/"
        >商品ページ</nuxt-link
      >からカートに追加してください。
    </p>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  head() {
    return {
      title: "picasso  |  cart",
    };
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.$store.state.cart.cart.forEach((item) => {
        total += Number(item.price);
      });
      return total;
    },
  },
  methods: {
    removeCart(index) {
      this.$store.dispatch("cart/removeCart", index);
    },
  },
};
</script>
