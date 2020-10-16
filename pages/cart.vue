<template>
  <div class="container">
    <div v-if="$store.state.item.cart.length">
      <div class="grid2">
        <span>単価</span>
        <span>数量</span>
        <span>小計</span>
      </div>
      <ul>
        <hr />
        <li v-for="(item, index) in $store.state.item.cart" :key="index">
          <div class="grid">
            <div>
              <img v-lazy="item.url" width="150px" />
            </div>
            <div>
              <span>{{ item.name }}</span>
            </div>
            <div>
              <span class="price-txt">¥{{ item.price }}</span>
            </div>
            <div>
              <input
                type="number"
                v-model="item.quantity"
                style="width: 50px"
                min="0"
                max="5"
              />
            </div>
            <div>
              <span class="price-txt">¥{{ item.price * item.quantity }}</span>
            </div>
            <div>
              <v-icon @click="removeCart(index)"
                >mdi-close-circle-outline</v-icon
              >
            </div>
          </div>
          <hr />
        </li>

        <div class="buy-info">
          <div class="subtotal-price">
            <span>合計:</span>
            <span class="price-txt">¥{{ Number(totalPrice) | addComma }}</span>
          </div>
          <div>
            <v-btn nuxt to="/" class="back-button">shoppingを続ける</v-btn>
            <v-btn @click="checkLogin" class="checkout-button">
              購入する
            </v-btn>
          </div>
        </div>
      </ul>

      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="440">
          <v-card>
            <v-card-title>
              ログインされていますでしょうか？
            </v-card-title>
            <v-card-text
              >ログインがお済みでないようでしたらお手数ですがログインをお願い致します。
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="closeDialog"> 戻る </v-btn>
              <v-btn nuxt to="login"> ログイン画面へ </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>

    <div v-else>
      <center>
        <p class="cart-info">お客様のカートには商品がありません。</p>
        <p>商品をカートに追加して下さい。</p>
        <v-btn nuxt to="/">戻る</v-btn>
      </center>
    </div>
  </div>
</template>

<script>
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
      this.$store.state.item.cart.forEach((item) => {
        total += Number(item.price * item.quantity);
      });
      return total;
    },
  },
  methods: {
    removeCart(index) {
      this.$store.dispatch("item/removeCart", index);
    },
    checkLogin() {
      if (this.$store.getters["user/isLogin"]) {
        this.$router.push({ name: "checkout" })
      } else {
        this.dialog = true;
      }
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 190px 190px 190px 190px 190px 190px;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
}
.grid2 {
  display: grid;
  grid-template-columns: 190px 190px 190px 190px 190px 190px;
  margin-left: 406px;
  span {
    font-size: 13px;
    font-weight: 300;
    margin-bottom: 7px;
  }
}
.buy-info {
  text-align: right;
  margin-right: 10px;
}
.subtotal-price {
  margin-top: 25px;
}
.checkout-button {
  margin-top: 15px;
}
.back-button {
  margin-top: 15px;
  margin-right: 5px;
}
#scrolling-techniques-2
  > div
  > main
  > div
  > div
  > div
  > ul
  > li
  > div
  > div:nth-child(6)
  > button {
  font-size: 19px;
}
.cart-info {
  text-align: center;
  margin-top: 50px;
}
</style>
