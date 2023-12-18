<template>
  <div class="quantity__button">
    <div class="hoeveelheid" v-if="stock >= 1">
      <button class="aantalitemsbutton" @click="quantitySubtract"><h1>-</h1></button>
      <p>{{ quantity }}</p>
      <button class="aantalitemsbutton" @click="quantityAdd"><h1>+</h1></button>
    </div>
    <h2 v-if="stock === 0">Tijdelijk niet beschikbaar!</h2>
  </div>
</template>
<style>
.aantalitemsbutton {
  color: #333333;
}
</style>
<script>
export default {
  data() {
    return {
      quantity: 1,
    };
  },

  props: ["stock", "cartQuantity"],

  emits: ["quantity-data"],

  methods: {
    quantityAdd() {
      if (this.quantity < this.stock) {
        this.quantity += 1;
        this.$emit("quantity-data", this.quantity);
        localStorage.setItem("quantity", this.quantity.toString());
      }
    },

    quantitySubtract() {
      if (this.quantity > 1) {
        this.quantity -= 1;
        this.$emit("quantity-data", this.quantity);
        localStorage.setItem("quantity", this.quantity.toString());
      }
    },



    restoreQuantityFromLocalStorage() {
      const storedQuantity = localStorage.getItem("quantity");
      if (storedQuantity) {
        this.quantity = parseInt(storedQuantity, 10);
      }
    },
  },

  created() {
    this.restoreQuantityFromLocalStorage();
  },
};
</script>
