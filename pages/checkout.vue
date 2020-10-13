<template>
  <div class="container">
    <center>
      <p>お客様のカードの情報をこちらに入力して下さい。</p>
      <p>ご購入ありがとうございました。</p>
      <nuxt-link to="cart">
        <v-btn> 戻る </v-btn>
      </nuxt-link>
    </center>
  </div>
</template>

<script>


export default {
  head() {
    return {
      title: "picasso  |  checkout",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>