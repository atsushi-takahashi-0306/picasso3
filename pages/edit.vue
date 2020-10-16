<template>
  <div class="container">
    <ul v-if="$store.state.item.items.length">
      <hr />
      <li v-for="item in $store.state.item.items" :key="item.id">
        <div>
          <img :src="item.url" width="120px" />
          商品名:
          <input type="text" :value="item.name" style="width:150px"/>
          価格: ¥
          <input type="text" :value="item.price" style="width:60px"/>
          在庫数: 
          <input type="number" :value="item.inventry" style="width:45px"/>
          画像:
          <input type="file" :value="item.img" />
          <v-btn> 編集 </v-btn>
          <v-btn @click="remove(item.id)"> 削除 </v-btn>
        </div>
        <hr />
      </li>
    </ul>

    <p v-else>編集する商品はありません。</p>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "picasso  |  edit",
    };
  },
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