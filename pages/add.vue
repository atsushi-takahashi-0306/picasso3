<template>
  <center>
    <div class="container">
      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="item.name"  label="商品名" :rules="rules"/>
              <v-text-field v-model="item.price" label="価格" :rules="rules" />
              <v-text-field v-model="item.inventry" label="在庫数"/>
              <v-file-input v-model="item.img" label="画像" counter @change="Preview_image"/>
              <v-img :src="previewUrl" width="110px" class="preview-img"></v-img>
              <v-btn @click="submit">商品登録</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </div>
  </center>
</template>

 
<script>
export default {
  head() {
    return {
      title: "picasso  |  add",
    };
  },
  data () {
    const max = 30
    return {
      item:{},
      rules: [
        v => !!v || '',
      ],
      previewUrl: null,
    }
  },
  methods: {
    submit() {
      this.$store.dispatch("item/upImage", this.item.img).then((url) => {
        this.item.url = url;
        this.$store.dispatch("item/addItem", this.item);
        this.item = "";
        this.previewUrl=""
        this.$router.push({ name: "index" });
      });
    },
    Preview_image() {
      this.previewUrl= URL.createObjectURL(this.item.img)
    }
  },
};
</script>


<style lang="scss" scoped>
.preview-img{
  margin-bottom:30px;
}
</style>

