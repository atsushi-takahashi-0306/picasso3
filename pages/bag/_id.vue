<template>
  <div class="flex">
    <div>
      <v-carousel>
        <v-carousel-item>
          <img v-lazy="showItem.url" width="250px" style="margin-left: 25px" />
        </v-carousel-item>
        <v-carousel-item>
          <img v-lazy="showItem.url" width="250px" style="margin-left: 25px" />
        </v-carousel-item>
        <v-carousel-item>
          <img v-lazy="showItem.url" width="250px" style="margin-left: 25px" />
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="main-img">
      <img v-lazy="showItem.url" width="430px" />
    </div>

    <div class="item-meta">
      <p class="name-txt">{{ showItem.name }}</p>
      <p class="price-txt">¥{{ Number(showItem.price) | addComma }}</p>
      <div class="two-btn">
        <nuxt-link to="/">
          <v-btn class="back-btn"> 戻る </v-btn>
        </nuxt-link>

        <v-btn @click="addCart"> カートに追加</v-btn>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "picasso  |  bags",
    };
  },
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
        quantity: 1,
      };
      this.$store.dispatch("item/addCart", item);
      this.$router.push({ name: "cart" });
    },
  },
};
</script>

<style lang="scss" scoped>
.name-txt {
  font-size: 50px;
  margin-bottom: 0;
}
.price-txt {
  font-weight: 300;
  font-size: 19px;
}
.flex {
  display: flex;
}
.main-img {
  margin-left: 120px;
}
.item-meta {
  margin-top: 200px;
}
.two-btn {
  margin-top: 30px;
}
.back-btn {
  margin-right: 5px;
}
</style>