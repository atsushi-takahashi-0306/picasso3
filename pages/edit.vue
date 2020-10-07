<template>
  <div>
    <ul>
      <li v-for="item in $store.state.item.items" :key="item.id">
        <div>
          <img :src="item.url" width="150px" height="150px" />
          商品名:
          <input type="text" :value=item.name>
          価格:  ¥
          <input type="text" :value=item.price>
          画像:
          <input type="file" :value="item.img">
        </div>
        <div>
          <v-btn @click="update(item.id)"> 編集 </v-btn>
          <v-btn @click="remove(item.id)"> 削除 </v-btn>
        </div>
      </li>
    </ul>
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