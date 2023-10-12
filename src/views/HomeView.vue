<template>
  <div class="home">
    <h1>this is main page</h1>
    <ul>
      <li v-for="product in productsModule.products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
    <button @click="getProducts">get products</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["productsModule"]),
  },

  methods: {
    ...mapMutations(["getProducts"]),
    ...mapActions(["doGetProducts"]),
    async getProducts() {
      await this.doGetProducts();
    },
  },
};
</script>
