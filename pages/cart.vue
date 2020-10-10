<template>
  <div>
    <ul v-if="$store.state.cart.cart.length">
      <li v-for="(item, index) in $store.state.cart.cart" :key="index">
        <div>
          <img v-lazy="item.url" width="230px" />
          <div>
            <p>{{ item.name}}</p>
            <v-btn @click="removeCart(index)"> 削除する </v-btn>
            <span class="price-txt">¥{{ item.price }}</span>
          </div>
        </div>
      </li>
      <div class="buy-info">
        <p>小計({{ $store.state.cart.cart.length }}点): </p>
        <span class="price-txt">¥{{Number(totalPrice) | addComma}}</span>
        <v-btn nuxt to="/checkout"> 購入する </v-btn>
      </div>
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

<style lang="scss" scoped>

</style>
