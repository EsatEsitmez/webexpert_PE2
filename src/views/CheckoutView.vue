<template>
  <div>
    <CheckoutComponent :items="cartItems" />
  </div>
</template>

<script>
import CheckoutComponent from "@/components/CheckoutComponent";

export default {
  components: { CheckoutComponent },
  data() {
    return {
      cartItems: [],
    };
  },
  mounted() {
    this.loadCartItems();
  },
  methods: {
    loadCartItems() {
      const storedItems = localStorage.getItem('cartItems');

      if (storedItems) {
        this.cartItems = JSON.parse(storedItems);
      }
    },
  },
};
</script>
