<template>
  <div class="container">
    <ul v-if="$store.state.item.items.length">
      <span>合計アイテム数:{{ $store.state.item.items.length }}</span>
      <span>
        /総在庫数:{{
          $store.state.item.items.reduce((p, x) => p + Number(x.inventry), 0)
        }}</span
      >
      <hr />
      <li v-for="(item, index) in $store.state.item.items" :key="index">
        <div>
          <nuxt-link :to="{ name: 'bag-id', params: { id: item.id } }">
            <img v-lazy="item.url" width="120px" />
          </nuxt-link>
          商品名:
          <input type="text" :value="item.name" style="width: 125px" />
          ID:
          <input type="text" :value="item.id" style="width: 210px" />
          価格: ¥
          <input
            type="text"
            :value="Number(item.price) | addComma"
            style="width: 60px"
          />
          在庫数:
          <input type="number" :value="item.inventry" style="width: 40px" />
          <v-btn class="soldout-btn" disabled> soldout </v-btn>
          <v-btn @click="update">
            編集
          </v-btn>
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
  data() {
    return {
      item: {},
    };
  },
  created() {
    this.$store.dispatch("item/editInit");
  },
  methods: {
    remove(id) {
      this.$store.dispatch("item/remove", id);
    },
    update(index) {
      this.$store.dispatch("item/update", index);
    },
  },
};
</script>


<style lang="scss" scoped>
.soldout-btn {
  margin-left: 30px;
  margin-right: 15px;
}
</style>