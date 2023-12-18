<template>
  <div>
    <div id="winkelwagencontainerproduct">
      <div class="winkelwagen__product">
        <img :src="require(`@/assets/products/${product.img}`)" :alt="product.title">
      </div>
      <div class="winkelwagenproduct">
        <h2>{{ product.title }}</h2>
      </div>
      <div class="winkelwagenproduct" id="quantity">
        <QuantityInputComponent :stock="product.stock" :cartQuantity="product.quantity" @quantity-data="setQuantityData"/>
      </div>
      <div class="winkelwagenproduct">
        <h3 style="font-weight: 400">
          {{ subtotalChange }} <br>
          {{ BTWchange }} <br>
          {{ priceString }}
        </h3>
      </div>
      <div class="winkelwagenproduct">
        <button @click="removeItem"> <img class="bincomponent" src="../../assets/binIcon.png" alt="bin"/></button>
      </div>

    </div>
    <div id="winkelwagenlijn"><hr></div>
  </div>
</template>

<script>
import QuantityInputComponent from '@/components/QuantityInputComponent.vue';

export default {
  components: {
    QuantityInputComponent
  },

  props: ['product'],

  emits: ['quantity-data', 'remove-item'],

  data() {
    return {
      subtotal: (Math.round((this.product.price * this.product.quantity) * 100) / 100).toFixed(2),
      BTW: (Math.round((((this.product.price / 100) * this.product.BTW) * this.product.quantity) * 100) / 100).toFixed(2),
      error: null,
    };
  },

  computed: {
    subtotalChange() {
      return 'Subtotaal: €' + (Math.round((this.product.price * this.product.quantity) * 100) / 100).toFixed(2);
    },
    BTWchange() {
      return 'BTW: €' + (Math.round((((this.product.price / 100) * this.product.BTW) * this.product.quantity) * 100) / 100).toFixed(2);
    },
    priceString() {
      return 'Prijs: €' + (Math.round((this.product.price * 1.21) * this.product.quantity * 100) / 100).toFixed(2);
    },
  },

  watch: {
    product: {
      handler() {
        this.saveToLocalStorage();
      },
      deep: true,
    },
  },

  created() {
    this.retrieveFromLocalStorage();
  },

  methods: {
    setQuantityData(quantity) {
      if (quantity <= this.product.stock) {
        this.$emit('quantity-data', quantity, this.product.id);
        this.error = null;
      } else {
        this.error = 'Niet genoeg voorraad beschikbaar';
      }
    },
    removeItem() {
      this.$emit('remove-item', this.product.id);
    },

    saveToLocalStorage() {
      const cartData = JSON.parse(localStorage.getItem('cart')) || {};
      cartData[this.product.id] = {
        quantity: this.product.quantity,
      };
      localStorage.setItem('cart', JSON.stringify(cartData));
    },

    retrieveFromLocalStorage() {
      const cartData = JSON.parse(localStorage.getItem('cart')) || {};
      if (cartData[this.product.id]) {
        this.$emit('quantity-data', cartData[this.product.id].quantity, this.product.id);
      }
    },
  }
}
</script>

<style>


.bincomponent {
  cursor: pointer;
}
</style>