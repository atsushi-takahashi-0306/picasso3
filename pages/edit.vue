<template>
  <div class="container">
    <ul v-if="$store.state.item.items.length">
      <hr>
      <li v-for="item in $store.state.item.items" :key="item.id">
        <div>
          <img :src="item.url" width="130px" />
          商品名:
          <input type="text" :value=item.name>
          価格:  ¥
          <input type="text" :value=item.price>
          画像:
          <input type="file" :value="item.img">
          <v-btn @click="remove(item.id)"> 削除 </v-btn>
        </div>
        <hr>
      </li>
    </ul>

    <p v-else>編集する商品はありません。</p>
  </div>
</template>


<script>
export default {
  created() {
    this.$store.dispatch("item/init");
  },
  methods: {
    remove(id) {
      this.$store.dispatch("item/remove", id);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>