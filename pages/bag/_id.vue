<template>
  <div>
    <img :src="showItem.url" width="680px" />
    <div>
      <h3>{{ showItem.name }}</h3>
      <p>¥{{ Number(showItem.price) | addComma }}</p>
    </div>

    <div>
      <v-btn @click="addCart">
        <span>カートに追加</span>
      </v-btn>
    </div>

    <nuxt-link to="/">戻る</nuxt-link>
  </div>
</template>


<script>
export default {
  computed: {
    showItem() {
      return this.$store.state.item.item;
    },
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("item/show", itemId);
  },
  methods: {
    addCart() {
      const item = {
        id: this.$route.params.id,
        name: this.$store.state.item.item.name,
        price: this.$store.state.item.item.price,
        url: this.$store.state.item.item.url,
      };
      this.$store.dispatch("cart/addCart", item);
    },
  },
};
</script>