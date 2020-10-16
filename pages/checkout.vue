<template>
  <div class="container">
    <center>
      <p>ご購入誠にありがとうございました。</p>
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