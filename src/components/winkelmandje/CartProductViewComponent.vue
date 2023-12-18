<template>
  <div class="winkelwagen">
  </div>
  <div class="winkelwagenbox">
    <div id="emptyCart" v-if="cartList.length === 0">
      <div class=" col text-center" id="winkelwagenleeg">
        <h1>Je winkelwagentje is nog leeg! </h1>
        <button class="winkelwagenbutton">
          <router-link to="/products" style="text-decoration: none"><h5>Bekijk onze producten</h5></router-link>
        </button>
        <div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="cartList.length !== 0">
    <div class="iteminwinkelwagen">
      <div id="winkelwagencontainergap">
        <div id="winkelwagencontainerproducten">
          <div>
            <button class="winkelwagenbutton">
              <router-link to="/products" style="text-decoration: none"><h5>Meer Producten</h5></router-link>
            </button>
          </div>
          <CartProductComponent v-for="product in cartList" :key="product.id" :product="product" @quantity-data="setQuantityData" @remove-item="removeItem"/>
        </div>

        <div id="winkelwagencontainerbesteloverzicht">
          <PriceComponentVue/>
          <button @click="goToLink()" class="winkelwagenbutton"><h5>Verder naar bestelling</h5></button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import CartProductComponent from '@/components/winkelmandje/CartProductComponent.vue'
import PriceComponentVue from '@/components/winkelmandje/PriceComponent.vue'

export default {
  inject: [
    'cartList'
  ],

  components: {
    CartProductComponent,
    PriceComponentVue
  },

  data() {
    return {};
  },

  methods: {
    setQuantityData(quantity, id) {
      this.cartList.forEach(product => {
        if (product.id === id) {
          product.quantity = quantity;
        }
      });
    },
    removeItem(id) {
      this.cartList.forEach(product => {
        if (product.id === id) {
          let index = this.cartList.indexOf(product);
          this.cartList.splice(index, 1);
        }
      });
    },
    goToLink() {
      const isLoggedIn = 'true';

      if (isLoggedIn) {
        this.$router.push('/cart/checkout');
      } else {
        this.$router.push('/login');
        alert('Je moet inloggen om te kunnen bestellen.');
      }
    }
  }
};
</script>


<style scoped>
.winkelwagenbutton {
  cursor: pointer;
}
</style>