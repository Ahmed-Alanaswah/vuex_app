export default {
  state: {
    products: "",
  },
  getters: {},
  mutations: {
    getProducts(state, products) {
      state.products = products;
      console.log(products);
    },
  },

  actions: {
    async doGetProducts(contex) {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          contex.commit("getProducts", data.products);
        });
    },
  },
};
