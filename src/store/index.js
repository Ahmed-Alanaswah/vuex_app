import { createStore } from "vuex";
import productsModule from "@/store/products/getProducts";
export default createStore({
  modules: { productsModule },
});
