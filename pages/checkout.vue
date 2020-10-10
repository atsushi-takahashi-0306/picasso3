<template>
  <div class="container">
    <p>お客様のカードの情報をこちらに入力して下さい。</p>
    <nuxt-link to="cart">
      <v-btn> 戻る </v-btn>
    </nuxt-link>
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