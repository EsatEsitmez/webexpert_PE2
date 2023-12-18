<template>
  <div>
    <HeaderComponent/>
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ProductList from "./productsList.json";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },

  data() {
    return {
      productList: JSON.parse(localStorage.getItem('productList')) || ProductList,
      cartList: JSON.parse(localStorage.getItem('cartList')) || [],
    };
  },

  provide() {
    return {
      productList: this.productList,
      cartList: this.cartList,
    };
  },

  watch: {
    productList: {
      handler(newValue) {
        localStorage.setItem('productList', JSON.stringify(newValue));
      },
      deep: true,
    },
    cartList: {
      handler(newValue) {
        localStorage.setItem('cartList', JSON.stringify(newValue));
      },
      deep: true,
    },
  },
};
</script>
